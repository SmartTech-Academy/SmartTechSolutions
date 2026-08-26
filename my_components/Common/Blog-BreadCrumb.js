import Image from "next/image";
import Link from "next/link";

import bgImage from "../../public/images/bg/bg-image-10.jpg";

const BlogBreadCrumb = ({ post }) => {
  return (
    <>
      <div className="breadcrumb-image-container breadcrumb-style-max-width">
        <div className="breadcrumb-image-wrapper">
          <div className="breadcrumb-dark">
            <Image src={bgImage} alt="" />
          </div>
        </div>
        <div className="breadcrumb-content-top text-center">
          <ul className="meta-list justify-content-center mb--10">
            <li className="list-item">
              <div className="author-thumbnail">
                {post?.author?.avatarUrl && (
                  <Image src={post.author.avatarUrl} width={64} height={64} alt={post.author.name} />
                )}
              </div>
              {post && (
                <div className="author-info">
                  <strong>{post.author?.name}</strong>{" "}
                  in <strong>{post.category}</strong>
                </div>
              )}
            </li>
            {post && (
              <li className="list-item">
                <i className="feather-clock"></i>
                <span>{post.date}</span>
              </li>
            )}
          </ul>
          {post && <h1 className="title">{post.title}</h1>}
          {post && <p>{post.excerpt}</p>}
        </div>
      </div>
    </>
  );
};

export default BlogBreadCrumb;
