import Image from "next/image";
import Link from "next/link";

import { ROUTE } from "@/route/app_routes.js";
import useRecentPosts from "@/my_components/_Global/useRecentPosts";

const ReadArticleIcon = () => (
  <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#27374D" fill="none" fillRule="evenodd">
      <path d="M10.614 0l5.629 5.629-5.63 5.629" />
      <path strokeLinecap="square" d="M.663 5.572h14.594" />
    </g>
  </svg>
);

/**
 * "Blog Posts" widget embedded across ~15 otherwise-unrelated pages
 * (homepage, About, Services, Projects, etc.) — the 4 most recent posts
 * from the headless WordPress blog (blog.smarttech.ng), fetched client-side
 * on mount since none of these host pages have a data-fetching layer of
 * their own. Real featured image, real title, real excerpt, real link.
 *
 * Excludes the "NEWS" category — those posts are reserved for the
 * "Latest News" widget (BlogGridMinimal) that appears further down most of
 * these same pages, so a post never shows up twice on one page.
 */
const BlogWidget = ({ extra_class }) => {
  const { posts, loading } = useRecentPosts(4, null, "NEWS");
  const [lead, ...rest] = posts;

  if (!loading && posts.length === 0) return null;

  return (
    <div className="row g-5 rbt-blog-widget">
      <div className={"col-lg-6 col-md-12 col-sm-12 col-12" + extra_class} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
        <div className="rbt-card variation-02 height-330 rbt-hover">
          {lead ? (
            <>
              <div className="rbt-card-img">
                <Link href={ROUTE.blog_details + lead.slug}>
                  {lead.image ? (
                    <Image src={lead.image} width={580} height={300} priority alt={lead.imageAlt} />
                  ) : null}
                </Link>
              </div>
              <div className="rbt-card-body">
                <h3 className="rbt-card-title">
                  <Link href={ROUTE.blog_details + lead.slug}>{lead.title}</Link>
                </h3>
                <p className="rbt-card-text">{lead.excerpt}</p>
                <div className="rbt-card-bottom">
                  <Link className="transparent-button" href={ROUTE.blog_details + lead.slug}>
                    Read Article
                    <i><ReadArticleIcon /></i>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="rbt-card-body" aria-hidden="true">
              <div className="rbt-img-skeleton" style={{ height: 220, borderRadius: 8 }} />
            </div>
          )}
        </div>
      </div>

      <div className={"col-lg-6 col-md-12 col-sm-12 col-12" + extra_class} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
        {rest.map((post, index) => (
          <div className={"rbt-card card-list variation-02 rbt-hover" + (index > 0 ? " mt--30" : "")} key={post.slug}>
            <div className="rbt-card-img">
              <Link href={ROUTE.blog_details + post.slug}>
                {post.image ? (
                  <Image src={post.image} width={580} height={300} priority alt={post.imageAlt} />
                ) : null}
              </Link>
            </div>
            <div className="rbt-card-body">
              <h5 className="rbt-card-title">
                <Link href={ROUTE.blog_details + post.slug}>{post.title}</Link>
              </h5>
              <div className="rbt-card-bottom">
                <Link className="transparent-button" href={ROUTE.blog_details + post.slug}>
                  Read Article
                  <i><ReadArticleIcon /></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogWidget;
