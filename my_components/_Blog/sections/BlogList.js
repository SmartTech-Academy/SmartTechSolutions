import { useMemo, useState } from "react";

// load in other components
import BlogMagazineGrid from "./BlogMagazineGrid";
import Pagination from "@/my_components/Common/Pagination";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

const POSTS_PER_PAGE = 7;

// start hook here
const BlogList = ({ posts = [], isPagination }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  // Category pills are derived from whatever the fetched posts actually
  // carry — a fixed list would silently drift out of sync with WordPress
  // the moment someone adds/renames a category over there.
  const categories = useMemo(() => {
    const unique = new Set(posts.map((post) => post.category).filter(Boolean));
    return ["All", ...Array.from(unique).sort()];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

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
