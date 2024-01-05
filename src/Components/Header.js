import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header"> 
      <h1>MATICE</h1>
      <div>
        <ul className="navBar">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/support">SUPPORT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
