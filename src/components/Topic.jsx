import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TopicList from "./TopicList";

function Topic() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://kirils-ncnews.herokuapp.com/api/articles?topic=${topic}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setTopics(response.articlesList);
        setIsLoading(false);
      });
  }, [topic]);
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <TopicList />
      <h2>ArticlesListByTopic: {topic}</h2>
      {topics.map(({ article_id, title }) => {
        return (
          <div key={article_id}>
            <ul>
              <Link to={`/articles/${article_id}`}>
                <li>{title}</li>
              </Link>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Topic;
