import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Header + NV</h1>
      <nav>
        <Link to="/articles">Articles List</Link>
      </nav>
    </div>
  );
}

export default Header;
