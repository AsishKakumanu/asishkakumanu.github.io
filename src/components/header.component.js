import React from "react";
import { Link } from "gatsby";
import favicon from "../images/favicon.png";

export default class header extends React.Component {
  render() {
    return (
      <header>
        <a href="/" className="alogo">
          <img className="logo" src={favicon} alt="Logo" />
        </a>

        <nav>
          <ul className="nav_links">
            <li>
              <Link to="/" className="hover">
                Home
              </Link>
            </li>
            <li>
              <Link to="/page-2/" className="hover">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/page-3/" className="hover">
                Contact 🚧
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
