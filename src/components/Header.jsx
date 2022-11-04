import React from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

function Header() {
  return (
    <div>
      <h1>Header + NV</h1>
      <nav>
        <ToggleTheme />
        <Link className="ArticleLink" to="/articles">
          Articles List
        </Link>
      </nav>
    </div>
  );
}

export default Header;
