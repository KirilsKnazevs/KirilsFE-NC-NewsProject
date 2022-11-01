import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import TopicList from "./TopicList";

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
    <>
      <TopicList />
      <section>
        <h2>ArticlesList:</h2>
        {articles.map(({ article_id, title }) => {
          return (
            <Link to={`/articles`} key={article_id}>
              <ArticleCard article_id={article_id} title={title} />
            </Link>
          );
        })}
      </section>
    </>
  );
}

export default ArticlesList;
