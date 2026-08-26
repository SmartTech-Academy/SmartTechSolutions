import { getRecentPosts } from "@/helper/wpgraphql";

// Same-origin proxy for the client-side "Blog Posts" widgets
// (BlogWidget.js / BlogGridMinimal.js, embedded across ~30 pages).
// blog.smarttech.ng/graphql doesn't send an Access-Control-Allow-Origin
// header, so a browser calling it directly from this site's origin gets
// blocked by CORS — that only affects requests made *from the browser*,
// not server-to-server ones, so this route makes the real WPGraphQL call
// from Next.js's server (unaffected by CORS) and the browser calls this
// same-origin endpoint instead.
export default async function handler(req, res) {
  const countParam = parseInt(req.query.count, 10);
  const count = Number.isFinite(countParam) ? Math.min(Math.max(countParam, 1), 12) : 4;
  const categoryName = typeof req.query.category === "string" ? req.query.category : null;
  const excludeCategoryName = typeof req.query.excludeCategory === "string" ? req.query.excludeCategory : null;

  try {
    const posts = await getRecentPosts(count, { categoryName, excludeCategoryName });
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    res.status(200).json({ posts });
  } catch (err) {
    console.error("GET /api/blog/recent-posts failed:", err);
    res.status(502).json({ posts: [], error: "Failed to fetch posts" });
  }
}
