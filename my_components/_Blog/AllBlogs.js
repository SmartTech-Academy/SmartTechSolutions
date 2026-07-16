import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import BlogList from "./sections/BlogList";
import Newsletter from "@/my_components/Newsletters/Newsletter";
import CallToActionOne from "@/my_components/CallToAction/CallToActionOne";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
import { image_url } from "../../helper/Utilities";

import blogHeroBg from "@/public/app_images/blog/blog_hero_bg.webp";

// Two featured posts lead the masthead — same images/titles already used
// further down the archive, just given the premium treatment up top.
const featuredPosts = [
  {
    // Trailing number must match this post's id in data/blog/blog.json —
    // the detail page (pages/blog/post/[postId]/index.js) resolves which
    // post to show by extracting the number at the end of this slug, so
    // every post needs its OWN distinct trailing digit or they all
    // resolve to the same article (the bug this fixes).
    slug: "how-to-analyze-your-best-pages-for-seo-performance-1",
    image: "/app_images/blog/blog1.webp",
    width: 1085,
    height: 780,
    category: "Growth & SEO",
    title: "How to Analyze Your Best Pages for SEO Performance",
    excerpt: "A practical framework for finding which pages are quietly driving your growth — and the ones bleeding traffic without anyone noticing.",
    date: "Jul 09, 2026",
    readTime: "7 min read",
  },
  {
    slug: "why-is-education-so-famous-2",
    image: "/app_images/blog/blog2.webp",
    width: 1085,
    height: 780,
    category: "Product",
    title: "Why Is Education So Famous?",
    excerpt: "How the best product teams turn ed-tech features into habits users actually stick with, from onboarding to the first real \"aha\" moment.",
    date: "Jun 24, 2026",
    readTime: "5 min read",
  },
];

const AllBlogs = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <main className="rbt-main-wrapper rbt-blog-page">
      {/* ══════════════ EDITORIAL HERO + FEATURED POSTS ══════════════ */}
      <section className="blog-hero">
        <Image
          src={blogHeroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="blog-hero__bg"
          aria-hidden="true"
        />
        <span className="blog-hero__overlay" aria-hidden="true"></span>
        <span className="blog-hero__glow blog-hero__glow--one" aria-hidden="true"></span>
        <span className="blog-hero__glow blog-hero__glow--two" aria-hidden="true"></span>

        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7 rbt-reveal" style={{ "--reveal-delay": "0.02s" }}>
              <span className="blog-hero__eyebrow">{CONFIG.NICK_NAME} Insights</span>
              <h1 className="blog-hero__title">
                Ideas, engineering &amp; <span className="theme-gradient rbt-blog-hero-gradient">innovation</span> notes
              </h1>
              <p className="blog-hero__desc">
                Stay informed with the latest updates and announcements from {CONFIG.NICK_NAME} — product
                deep-dives, engineering breakdowns, AI experiments and the occasional build-in-public story.
              </p>
            </div>

            <div className="col-lg-5 rbt-reveal" style={{ "--reveal-delay": "0.22s" }}>
              <div className="blog-hero__stats">
                <div className="blog-hero__stat">
                  <strong>6</strong>
                  <span>Articles</span>
                </div>
                <div className="blog-hero__stat">
                  <strong>5</strong>
                  <span>Categories</span>
                </div>
                <div className="blog-hero__stat">
                  <strong>Weekly</strong>
                  <span>New Drops</span>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-featured-grid">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.title}
                href={ROUTE.blog_details + post.slug}
                className="blog-featured rbt-reveal"
                style={{ "--reveal-delay": `${0.36 + index * 0.16}s` }}
              >
                <span className="blog-featured__media">
                  <Image
                    src={image_url(post.image, true)}
                    width={post.width}
                    height={post.height}
                    priority={index === 0}
                    alt={post.title}
                    sizes="(max-width: 767px) 100vw, 50vw"
                  />
                  <span className="blog-featured__scrim" aria-hidden="true"></span>
                  <span className="blog-featured__badge">{index === 0 ? "Featured" : "Editor's Pick"}</span>
                </span>

                <span className="blog-featured__body">
                  <span className="blog-featured__category">{post.category}</span>
                  <span className="blog-featured__title">{post.title}</span>
                  <span className="blog-featured__excerpt">{post.excerpt}</span>

                  <span className="blog-featured__meta">
                    <span>
                      <i className="feather-calendar" aria-hidden="true"></i>
                      {post.date}
                    </span>
                    <span>
                      <i className="feather-clock" aria-hidden="true"></i>
                      {post.readTime}
                    </span>
                  </span>

                  <span className="blog-featured__cta">
                    Read full story
                    <i className="feather-arrow-right" aria-hidden="true"></i>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ MAGAZINE GRID + FILTERS + PAGINATION ══════════════ */}
      <div className="rbt-blog-area rbt-section-gapBottom">
        <div className="container">
          <BlogList isPagination={true} />
        </div>
      </div>

      <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
        <CallToActionOne btnClass="rbt-btn btn-gradient hover-icon-reverse" extra_class=" sal-animate" />
      </div>

      <div
        id="rbt-blog-newsletter"
        className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap"
        style={{ background: "url(" + image_url("/app_images/bg/dots.png") + ") repeat center/auto" }}
      >
        <Newsletter />
      </div>
    </main>
  );
};

export default AllBlogs;
