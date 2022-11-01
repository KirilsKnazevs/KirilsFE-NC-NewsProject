import React from "react";
import { Link } from "react-router-dom";

function TopicList() {
  return (
    <div>
      TopicList:
      <nav>
        <Link to="/articles">All Topics</Link>
        <Link to="/topics/coding">Coding</Link>
        <Link to="/topics/cooking">Cooking</Link>
        <Link to="/topics/football">Football</Link>
      </nav>
    </div>
  );
}

export default TopicList;
