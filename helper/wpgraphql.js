// Thin client for SmartTech Solutions' headless WordPress blog
// (https://blog.smarttech.ng), queried over WPGraphQL. Every blog surface
// on this site — the /blog listing, /blog/post/[slug] detail page, and the
// "Blog Posts" widgets embedded across ~30 unrelated pages — reads through
// this one file instead of the old data/blog/blog.json fixture.

export const WPGRAPHQL_ENDPOINT = "https://blog.smarttech.ng/graphql";

async function fetchGraphQL(query, variables = {}) {
  const res = await fetch(WPGRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`WPGraphQL request failed with status ${res.status}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }

  return json.data;
}

// ────────────────────────────────────────────────────────────────────────
// HTML helpers — WordPress returns title/excerpt/content as HTML strings.
// ────────────────────────────────────────────────────────────────────────
const HTML_ENTITIES = {
  "&hellip;": "…",
  "&#8217;": "’",
  "&#8216;": "‘",
  "&#8220;": "“",
  "&#8221;": "”",
  "&#8211;": "–",
  "&#8212;": "—",
  "&#038;": "&",
  "&amp;": "&",
  "&nbsp;": " ",
};

export function stripHtml(html) {
  if (!html) return "";
  let text = html.replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]+>/g, " ");
  for (const [entity, char] of Object.entries(HTML_ENTITIES)) {
    text = text.split(entity).join(char);
  }
  return text.replace(/\s+/g, " ").trim();
}

export function formatPostDate(iso) {
  if (!iso) return "";
  const date = new Date(iso.includes("T") ? iso : iso.replace(" ", "T"));
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}

function estimateReadTime(html) {
  const wordCount = stripHtml(html).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}

// WordPress's own permalink (`uri`, e.g. "/2026/07/28/my-post/") is date-
// prefixed — this site keeps its own clean /blog/post/<slug> URL instead,
// so `slug` is what every card/link uses. Falls back to deriving it from
// `uri` on the off chance a query only asked for that field.
function slugFrom(node) {
  if (node.slug) return node.slug;
  if (!node.uri) return "";
  return node.uri.replace(/\/+$/, "").split("/").pop();
}

// ────────────────────────────────────────────────────────────────────────
// Normalizers — map a raw WPGraphQL `Post` node onto the flat shape the
// existing blog components already expect (slug, image, category, excerpt,
// date, readTime — the shape my_components/_Blog/sections/BlogList.js's
// old hardcoded array used), so the presentational components barely change.
// ────────────────────────────────────────────────────────────────────────
export function normalizePostCard(node) {
  if (!node) return null;
  return {
    id: node.databaseId,
    slug: slugFrom(node),
    uri: node.uri || "",
    title: stripHtml(node.title),
    excerpt: stripHtml(node.excerpt),
    date: formatPostDate(node.date),
    dateISO: node.date || "",
    readTime: estimateReadTime(node.content || node.excerpt),
    category: node.categories?.nodes?.[0]?.name || "General",
    categories: (node.categories?.nodes || []).map((c) => c.name),
    image: node.featuredImage?.node?.sourceUrl || null,
    imageAlt: node.featuredImage?.node?.altText || stripHtml(node.title),
    authorName: node.author?.node?.name || "SmartTech Solutions",
    authorAvatar: node.author?.node?.avatar?.url || null,
  };
}

function normalizeComment(node) {
  return {
    name: node.author?.node?.name || "Anonymous",
    avatarUrl: node.author?.node?.avatar?.url || null,
    date: formatPostDate(node.date),
    content: stripHtml(node.content),
    children: (node.replies?.nodes || []).map((reply) => ({
      name: reply.author?.node?.name || "Anonymous",
      date: formatPostDate(reply.date),
      content: stripHtml(reply.content),
    })),
  };
}

export function normalizePostFull(node) {
  const card = normalizePostCard(node);
  if (!card) return null;
  return {
    ...card,
    content: node.content || "",
    author: {
      name: card.authorName,
      avatarUrl: card.authorAvatar,
      bio: node.author?.node?.description || "",
    },
    comments: (node.comments?.nodes || []).map(normalizeComment),
  };
}

// ────────────────────────────────────────────────────────────────────────
// Queries
// ────────────────────────────────────────────────────────────────────────
const LIST_QUERY = `
  query GetPosts($first: Int!, $after: String, $categoryName: String) {
    posts(
      first: $first
      after: $after
      where: { orderby: { field: DATE, order: DESC }, categoryName: $categoryName }
    ) {
      pageInfo { hasNextPage endCursor }
      nodes {
        id
        databaseId
        slug
        uri
        title
        date
        excerpt
        content
        categories { nodes { name slug } }
        author { node { name avatar { url } } }
        featuredImage { node { sourceUrl altText } }
      }
    }
  }
`;

const POST_BY_SLUG_QUERY = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      slug
      uri
      title
      date
      excerpt
      content
      categories { nodes { name slug } }
      author { node { name description avatar { url } } }
      featuredImage { node { sourceUrl altText } }
      comments(first: 50) {
        nodes {
          content
          date
          status
          author { node { name ... on Commenter { avatar { url } } } }
          replies {
            nodes {
              content
              date
              author { node { name } }
            }
          }
        }
      }
    }
  }
`;

/** Every published post, normalized — paginates through WPGraphQL's cursor
 * connection so this stays correct however many posts the blog grows to
 * (capped at `maxPosts` as a sane upper bound). Used at build time by the
 * blog listing page and by getStaticPaths for the detail route.
 * `categoryName` optionally restricts to one WP category (e.g. "NEWS"). */
export async function getAllPosts({ maxPosts = 300, categoryName = null } = {}) {
  let all = [];
  let after = null;
  let hasNextPage = true;

  while (hasNextPage && all.length < maxPosts) {
    const data = await fetchGraphQL(LIST_QUERY, {
      first: Math.min(50, maxPosts - all.length),
      after,
      categoryName,
    });
    all = all.concat(data.posts.nodes);
    hasNextPage = data.posts.pageInfo.hasNextPage;
    after = data.posts.pageInfo.endCursor;
    if (!after) break;
  }

  return all.map(normalizePostCard);
}

/** Lightweight recent-posts fetch for the "Blog Posts" / "Latest News"
 * widgets embedded across the rest of the site (homepage, about, services,
 * etc.) — a single request, no pagination loop. `categoryName` optionally
 * restricts to one WP category, already sorted newest-first.
 *
 * `excludeCategoryName` is the complement: used by the "Blog Posts" widget
 * so it never duplicates whatever the "Latest News" widget (categoryName:
 * "NEWS") on the same page is already showing. WPGraphQL's `where` clause
 * here has no category-exclusion filter, so this over-fetches a larger
 * recent batch and filters it out using the `categories` every normalized
 * post already carries, then trims back down to `count`. Mutually exclusive
 * with `categoryName` — callers only ever want one or the other. */
export async function getRecentPosts(count = 4, { categoryName = null, excludeCategoryName = null } = {}) {
  if (!excludeCategoryName) {
    const data = await fetchGraphQL(LIST_QUERY, { first: count, after: null, categoryName });
    return data.posts.nodes.map(normalizePostCard);
  }

  const overfetchSize = Math.min(50, count * 5);
  const data = await fetchGraphQL(LIST_QUERY, { first: overfetchSize, after: null, categoryName: null });
  const posts = data.posts.nodes
    .map(normalizePostCard)
    .filter((post) => !post.categories.includes(excludeCategoryName));
  return posts.slice(0, count);
}

/** Full single post (content, comments, author bio) for the detail page. */
export async function getPostBySlug(slug) {
  if (!slug) return null;
  const data = await fetchGraphQL(POST_BY_SLUG_QUERY, { slug });
  return normalizePostFull(data.post);
}
