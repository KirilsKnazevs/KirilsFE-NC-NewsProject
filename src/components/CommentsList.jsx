import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

function CommentsList() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://kirils-ncnews.herokuapp.com/api/articles/${article_id}/comments`
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setComments(response.commentsList);
        setIsLoading(false);
      });
  }, [article_id]);
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      <h3>CommentsList:</h3>
      {comments.map(({ comment_id, body, author, votes, created_at }) => {
        return (
          <li key={comment_id}>
            <CommentCard
              comment_id={comment_id}
              body={body}
              author={author}
              votes={votes}
              created_at={created_at}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CommentsList;
