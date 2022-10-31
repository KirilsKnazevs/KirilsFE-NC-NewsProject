import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://kirils-ncnews.herokuapp.com/api/articles`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setArticles(response.articlesList);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h2>ArticlesList:</h2>
      {articles.map(
        ({
          article_id,
          title,
          topic,
          author,
          body,
          created_at,
          votes,
          comment_count,
        }) => {
          return (
            <Link to={`/article`} key={article_id}>
              <ArticleCard
                article_id={article_id}
                title={title}
                topic={topic}
                author={author}
                body={body}
                created_at={created_at}
                votes={votes}
                comment_count={comment_count}
              />
            </Link>
          );
        }
      )}
    </section>
  );
}

export default ArticlesList;
