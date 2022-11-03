import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Votes from "./Votes";

function Article() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://kirils-ncnews.herokuapp.com/api/articles/${article_id}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setArticle(response.article);
        setIsLoading(false);
      });
  }, [article_id]);
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div>
        <h2>{article.title}</h2>
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Description: {article.body}</p>
        <p>Created at: {article.created_at}</p>
        <p>Comment count: {article.comment_count} </p>
      </div>
      <Votes votes={article.votes} article_id={article.article_id} />
    </>
  );
}

export default Article;
