import Link from "next/link";
import Image from "next/image";

// load in utilities
import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "@/helper/Utilities";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

/**
 * Magazine-style post grid for the blog listing page only.
 * NOTE: intentionally a separate component from `BlogList-Items.js`, which
 * is also reused on the blog detail page's "Similar Post" section — keeping
 * them separate means this redesign never touches that other page.
 *
 * Uses ScrollRevealSection (a per-instance IntersectionObserver) instead of
 * sal.js's global `data-sal` scan — sal() only runs once on mount with
 * `once: true`, so cards that unmount/remount (e.g. filtered out by a
 * category tab, then filtered back in) were never re-observed and stayed
 * stuck at opacity: 0 forever. ScrollRevealSection creates a fresh observer
 * every time a card actually mounts, so filtering in and out always works.
 */
const BlogMagazineGrid = ({ posts, leadCard }) => {
  return (
    <div className="blog-grid">
      {posts.map((post, index) => {
        const isLead = Boolean(leadCard) && index === 0;

        return (
          <ScrollRevealSection
            key={post.id}
            className={"blog-grid__item" + (isLead ? " is-lead" : "")}
            threshold={0.1}
            style={{ "--reveal-delay": `${Math.min(index, 6) * 0.06}s` }}
          >
            <Link
              href={ROUTE.blog_details + post.slug}
              className="blog-grid__link"
            >
              <span className="blog-grid__media">
                <Image
                  src={post.image || image_url("/app_images/blog/blog_hero_bg.webp", true)}
                  fill
                  alt={post.imageAlt || post.title}
                  sizes={isLead ? "(max-width: 767px) 100vw, 66vw" : "(max-width: 767px) 100vw, 33vw"}
                />
                <span className="blog-grid__scrim" aria-hidden="true" />
                <span className="blog-grid__category">{post.category}</span>
              </span>

              <span className="blog-grid__body">
                <span className="blog-grid__meta">
                  <span>
                    <i className="feather-calendar" aria-hidden="true"></i>
                    {post.date}
                  </span>
                  <span>
                    <i className="feather-clock" aria-hidden="true"></i>
                    {post.readTime}
                  </span>
                </span>

                <span className="blog-grid__title">{post.title}</span>

                {post.excerpt ? (
                  <span className="blog-grid__excerpt">{post.excerpt}</span>
                ) : null}

                <span className="blog-grid__cta">
                  Read Article
                  <i className="feather-arrow-right" aria-hidden="true"></i>
                </span>
              </span>
            </Link>
          </ScrollRevealSection>
        );
      })}

      <ScrollRevealSection className="blog-grid__item is-newsletter" threshold={0.1}>
        <a href="#rbt-blog-newsletter" className="blog-grid__newsletter">
          <i className="feather-mail" aria-hidden="true"></i>
          <span className="blog-grid__newsletter-title">Never miss a drop</span>
          <span className="blog-grid__newsletter-desc">
            New articles on product, engineering, AI and blockchain — straight to your inbox.
          </span>
          <span className="blog-grid__cta">
            Subscribe now
            <i className="feather-arrow-right" aria-hidden="true"></i>
          </span>
        </a>
      </ScrollRevealSection>
    </div>
  );
};

export default BlogMagazineGrid;
