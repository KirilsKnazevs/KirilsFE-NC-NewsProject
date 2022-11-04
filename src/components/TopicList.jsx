import React from "react";
import { Link } from "react-router-dom";

function TopicList() {
  return (
    <div>
      TopicList:
      <nav>
        <Link className="ArticleLink" to="/articles">
          All Topics
        </Link>
        <br />
        <Link className="ArticleLink" to="/topics/coding">
          Coding
        </Link>
        <br />
        <Link className="ArticleLink" to="/topics/cooking">
          Cooking
        </Link>
        <br />
        <Link className="ArticleLink" to="/topics/football">
          Football
        </Link>
      </nav>
    </div>
  );
}

export default TopicList;
