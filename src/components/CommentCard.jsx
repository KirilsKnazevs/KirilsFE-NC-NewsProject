import React from "react";

function CommentCard({ comment_id, body, author, votes, created_at }) {
  return (
    <>
      <p>Author: {author}</p>
      <p>Date: {created_at}</p>
      <p>Comment: {body}</p>
      <p>Votes: {votes}</p>
    </>
  );
}

export default CommentCard;
