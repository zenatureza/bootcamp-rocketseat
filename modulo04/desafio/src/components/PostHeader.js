import React from 'react';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} alt={author.name} />
      <div className="details">
        <span>
          <b>{author.name}</b>
        </span>
        {date}
      </div>
    </div>
  );
}

export default PostHeader;