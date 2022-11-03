import React from "react";

function CommentCard({ comment_id, body, author, votes, created_at }) {
  return (
    <div>
      <ul>
        <li>Author: {author}</li>
        <li>Date: {created_at}</li>
        <li>Comment: {body}</li>
        <li>Votes: {votes}</li>
      </ul>
    </div>
  );
}

export default CommentCard;
