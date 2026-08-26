import Link from "next/link";
import Image from "next/image";

// load in utilities
import { ROUTE } from "@/route/app_routes.js";

/**
 * "Similar Post" widget on the blog detail page — real related posts
 * (passed down from pages/blog/post/[postId]/index.js's getStaticProps),
 * not a hardcoded card list that pointed every link at the same article
 * regardless of which post you were reading.
 */
const BlogListItems = ({ posts = [] }) => {
  return (
    <>
      {posts.map((post) => (
        <div className="rbt-card card-list variation-02 rbt-hover mt--30" key={post.slug}>
          <div className="rbt-card-img rbt-card-img--fill">
            <Link href={ROUTE.blog_details + post.slug} className="position-relative d-block">
              {post.image ? (
                <Image src={post.image} fill alt={post.imageAlt || post.title} sizes="290px" style={{ objectFit: "cover" }} />
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
      ))}
    </>
  );
};

export default BlogListItems;
