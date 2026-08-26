import Image from "next/image";
import React from "react";

const CommentAvatar = ({ name, avatarUrl }) => {
  if (avatarUrl) {
    return <Image src={avatarUrl} width={70} height={70} alt={name} />;
  }
  // WordPress comments from unregistered/no-gravatar commenters have no
  // avatar at all — an initial-letter placeholder beats a broken <Image>.
  return (
    <span className="comment-avatar-fallback" aria-hidden="true">
      {name ? name.charAt(0).toUpperCase() : "?"}
    </span>
  );
};

const Comment = ({ comnt }) => {
  return (
    <li className="comment">
      <div className="comment-body">
        <div className="single-comment">
          <div className="comment-img">
            <CommentAvatar name={comnt.name} avatarUrl={comnt.avatarUrl} />
          </div>
          <div className="comment-inner">
            <h6 className="commenter">{comnt.name}</h6>
            <div className="comment-meta">
              <div className="time-spent">{comnt.date}</div>
            </div>
            <div className="comment-text">
              <p className="b2">{comnt.content}</p>
            </div>
          </div>
        </div>
      </div>
      {comnt.children && comnt.children.length > 0 && (
        <ul className="children">
          {comnt.children.map((child, childIndex) => (
            <li className="comment" key={childIndex}>
              <div className="comment-body">
                <div className="single-comment">
                  <div className="comment-img">
                    <CommentAvatar name={child.name} avatarUrl={child.avatarUrl} />
                  </div>
                  <div className="comment-inner">
                    <h6 className="commenter">{child.name}</h6>
                    <div className="comment-meta">
                      <div className="time-spent">{child.date}</div>
                    </div>
                    <div className="comment-text">
                      <p className="b2">{child.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Comment;
