import { useEffect, useState } from "react";

/**
 * Client-side fetch of the N most recent WordPress posts, for the "Blog
 * Posts" widgets embedded across ~30 otherwise-unrelated pages (homepage,
 * About, Services, Projects, Events, etc.) — those pages have no existing
 * data-fetching layer of their own (this whole app is client-rendered, see
 * pages/blog/index.js for the one place that instead uses getStaticProps),
 * so the widgets fetch for themselves on mount rather than requiring every
 * call site to be converted to pass blog data down as props.
 *
 * Goes through /api/blog/recent-posts (same-origin) rather than calling
 * blog.smarttech.ng/graphql directly — the WordPress site doesn't send an
 * Access-Control-Allow-Origin header, so a browser-side request straight to
 * it is blocked by CORS even though the exact same query works fine from
 * Next.js's server (server-to-server requests aren't subject to CORS at
 * all — it's a browser-only restriction). The API route makes the real
 * call server-side and this hook just reads its same-origin JSON response.
 *
 * `category` optionally restricts to one WP category (e.g. "NEWS" for the
 * "Latest News" section). `excludeCategory` is the complement — used by the
 * general "Blog Posts" widget so it never repeats whatever "Latest News" is
 * already showing elsewhere on the same page (e.g. "NEWS"). Only one of the
 * two is ever passed by a given caller.
 */
const useRecentPosts = (count = 4, category = null, excludeCategory = null) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    const params = new URLSearchParams({ count: String(count) });
    if (category) params.set("category", category);
    if (excludeCategory) params.set("excludeCategory", excludeCategory);

    fetch(`/api/blog/recent-posts?${params.toString()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) {
          setPosts(data.posts || []);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [count, category, excludeCategory]);

  return { posts, loading, error };
};

export default useRecentPosts;
