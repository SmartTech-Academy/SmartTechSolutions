import Link from "next/link";
import Image from "next/image";

import { ROUTE } from "@/route/app_routes.js";
import useRecentPosts from "@/my_components/_Global/useRecentPosts";

/**
 * Compact 3-card "Latest News" grid embedded across ~20 otherwise-unrelated
 * pages — the most recent posts from WordPress's "NEWS" category only
 * (blog.smarttech.ng), newest first, fetched client-side on mount.
 * Previously read a `BlogData.blogGrid` key that didn't exist in
 * data/blog/blog.json (always undefined), rendered no image at all, and
 * linked to `/blog-details/<id>`, a route that doesn't exist anywhere in
 * this app (the real one is ROUTE.blog_details = "/blog/post/").
 */
const BlogGridMinimal = () => {
  const { posts, loading } = useRecentPosts(3, "NEWS");

  if (!loading && posts.length === 0) return null;

  return (
    <div className="row g-5">
      {posts.map((post) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={post.slug}>
          <div className="rbt-card variation-02 rbt-hover card-minimal">
            {post.image ? (
              <div className="rbt-card-img">
                <Link href={ROUTE.blog_details + post.slug}>
                  <Image src={post.image} width={580} height={300} alt={post.imageAlt} />
                </Link>
              </div>
            ) : null}

            <div className="rbt-card-body">
              <ul className="meta-list justify-content-start mb--30">
                <li className="list-item">
                  <i className="feather-clock"></i>
                  <span>{post.date}</span>
                </li>
              </ul>

              <h4 className="rbt-card-title">
                <Link href={ROUTE.blog_details + post.slug}>{post.title}</Link>
              </h4>

              <div className="rbt-card-bottom mt--40">
                <Link className="transparent-button" href={ROUTE.blog_details + post.slug}>
                  Learn More
                  <i>
                    <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="#27374D" fill="none" fillRule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                        <path strokeLinecap="square" d="M.663 5.572h14.594" />
                      </g>
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGridMinimal;
