import React from "react";
import { Link } from "gatsby";
import favicon from "../images/favicon.png";

export default class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <header
        className={`header ${
          this.state.hasScrolled ? "HeaderScrolled" : "Header"
        }`}
      >
        <div className={`headerGroup`}>
          <a href="/" className="alogo">
            <img className="logo" alt="headerLogo" src={favicon} />
          </a>
          <Link to="/" className="home" id="underline">
            Home
          </Link>
          <Link to="/projects/" className="projects" id="underline">
            Projects
          </Link>
          <Link to="/contact/" className="contact" id="underline">
            Contact
          </Link>
          <Link to="/about/" className="about" id="underline">
            About
          </Link>
        </div>
      </header>
    );
  }
}
