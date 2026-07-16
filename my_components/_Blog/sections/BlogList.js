import { useMemo, useState } from "react";

// load in other components
import BlogMagazineGrid from "./BlogMagazineGrid";
import Pagination from "@/my_components/Common/Pagination";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

const POSTS_PER_PAGE = 7;

// Same images / titles / links that shipped on this page before — only the
// layout, categories, dates and read-time badges are new presentation data.
const blogPosts = [
  {
    id: 2,
    // Trailing number must match this post's id in data/blog/blog.json —
    // see AllBlogs.js for why every post needs its own distinct digit.
    slug: "why-is-education-so-famous-2",
    image: "/app_images/blog/blog2.webp",
    width: 580,
    height: 300,
    category: "Product",
    title: "Why Is Education So Famous?",
    excerpt: "How the best product teams turn ed-tech features into habits users actually stick with, from onboarding to the first real \"aha\" moment.",
    date: "Jun 24, 2026",
    readTime: "5 min read",
  },
  {
    id: 3,
    slug: "difficult-things-about-education-3",
    image: "/app_images/blog/blog3.webp",
    width: 580,
    height: 300,
    category: "Engineering",
    title: "Difficult Things About Education.",
    excerpt: "Scaling a learning platform brings its own engineering headaches — sync across offline devices, content versioning, and multi-tenant data isolation.",
    date: "Jun 15, 2026",
    readTime: "4 min read",
  },
  {
    id: 4,
    slug: "education-is-so-famous-but-why-4",
    image: "/app_images/blog/blog4.webp",
    width: 580,
    height: 300,
    category: "AI & Automation",
    title: "Education Is So Famous, But Why?",
    excerpt: "Applied AI is quietly reshaping how students get feedback — adaptive quizzes, auto-graded essays, and tutoring assistants that actually understand context.",
    date: "Jun 08, 2026",
    readTime: "6 min read",
  },
  {
    id: 5,
    slug: "five-things-you-about-education-5",
    image: "/app_images/blog/blog5.webp",
    width: 580,
    height: 300,
    category: "Blockchain",
    title: "Five Things You About Education.",
    excerpt: "Verifiable credentials, tamper-proof transcripts, and micro-scholarships — five ways blockchain is finding real, practical use in ed-tech.",
    date: "May 29, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    slug: "you-will-never-truth-of-education-6",
    image: "/app_images/blog/blog6.webp",
    width: 580,
    height: 300,
    category: "Design",
    title: "You Will Never Truth Of Education.",
    excerpt: "Great learning UX hides complexity, not content — notes on designing interfaces that feel simple even when the material underneath isn't.",
    date: "May 18, 2026",
    readTime: "3 min read",
  },
];

const categories = ["All", "Product", "Engineering", "AI & Automation", "Blockchain", "Design"];

// start hook here
const BlogList = ({ isPagination }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    setPage(1);
  };

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="blog-toolbar" data-sal="fade" data-sal-duration="600">
        <div className="section-title text-start blog-toolbar__title">
          <span className="subtitle bg-primary-opacity">Browse the archive</span>
          <h3 className="title">Latest Articles</h3>
        </div>

        <div className="blog-filter" role="tablist" aria-label="Filter articles by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={"blog-filter__pill" + (activeCategory === category ? " is-active" : "")}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {visiblePosts.length > 0 ? (
        <BlogMagazineGrid posts={visiblePosts} leadCard={activeCategory === "All"} />
      ) : (
        <ScrollRevealSection className="blog-empty" threshold={0.1}>
          <i className="feather-inbox" aria-hidden="true"></i>
          <h5>No articles here yet</h5>
          <p>We haven&apos;t published in this category yet — check back soon or explore another topic.</p>
        </ScrollRevealSection>
      )}

      {isPagination && totalPages > 1 ? (
        <div className="row">
          <div className="col-lg-12 mt--60">
            <Pagination
              totalPages={totalPages}
              pageNumber={page}
              handleClick={handleClick}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BlogList;
