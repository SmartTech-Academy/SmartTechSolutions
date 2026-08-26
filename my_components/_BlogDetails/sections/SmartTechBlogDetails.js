import Image from "next/image";
import Link from "next/link";
import React from "react";

import Comment from "./Comment";

/**
 * Renders a real WordPress post (fetched over WPGraphQL — see
 * helper/wpgraphql.js) — featured image, the post's own HTML `content`
 * body verbatim, real categories/author/comments. Previously this rendered
 * a fixed template (descOne…descSeven, titleTwo, a hardcoded quote/gallery)
 * that every post shared identical boilerplate for; WordPress's own content
 * HTML already carries whatever paragraphs, headings, lists, quotes, and
 * inline images the author actually wrote, so there's no fixed shape left
 * to fill in — the WP content block *is* the article.
 */
const SmartTechBlogDetails = ({ post }) => {
  if (!post) return null;

  return (
    <div className="content">
      {post.image ? (
        <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
          <figure>
            <Image src={post.image} width={1085} height={645} priority alt={post.imageAlt || post.title} style={{ width: "100%", height: "auto" }} />
          </figure>
        </div>
      ) : null}

      <div className="rbt-post-content-body" dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.categories?.length ? (
        <div className="tagcloud">
          {post.categories.map((category) => (
            <Link href="#" key={category}>
              {category}
            </Link>
          ))}
        </div>
      ) : null}

      {post.comments?.length ? (
        <div className="rbt-comment-area">
          <div className="rbt-total-comment-post">
            <div className="title">
              <h4 className="mb--0">{post.comments.length} comment{post.comments.length === 1 ? "" : "s"}</h4>
            </div>
          </div>
          <ul className="comment-list">
            {post.comments.map((comment, index) => (
              <Comment comnt={comment} key={index} />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SmartTechBlogDetails;
