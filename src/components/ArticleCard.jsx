import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ title, article_id }) {
  return (
    <div>
      <ul>
        <Link to={`/articles/${article_id}`}>
          <li>Title: {title}</li>
        </Link>
      </ul>
    </div>
  );
}

export default ArticleCard;
