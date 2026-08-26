import Image from "next/image";
import React from "react";

/**
 * `author` here is the real WordPress post author (see
 * helper/wpgraphql.js's normalizePostFull) — just a name, an optional
 * Gravatar avatar, and a bio. WordPress has no per-author "social links"
 * concept out of the box, unlike the old hand-authored fixture data, so
 * that row is simply omitted rather than faked.
 */
const BlogAuthor = ({ author }) => {
  const { name, bio, avatarUrl } = author;
  return (
    <div className="media">
      {avatarUrl ? (
        <div className="thumbnail">
          <Image src={avatarUrl} width={105} height={105} alt={name} />
        </div>
      ) : null}
      <div className="media-body">
        <div className="author-info">
          <h5 className="title">{name}</h5>
        </div>
        {bio ? (
          <div className="content">
            <p className="description">{bio}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BlogAuthor;
