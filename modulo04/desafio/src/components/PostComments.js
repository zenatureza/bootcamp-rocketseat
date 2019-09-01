import React from 'react';

function PostComments({ comments }) {
  return (
    <>
      <div className="divider" />

      {comments.map(comment => (
        <div
          key={comment.id}
          className="comment"
        >
          <img
            src={comment.author.avatar}
            alt={comment.author.name}
            className="avatar"
          />

          <p>
            <span>
              {comment.author.name}
            </span>
            {comment.content}
          </p>
        </div>
      ))}
    </>
  );
}

export default PostComments;