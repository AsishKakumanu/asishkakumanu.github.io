import React from "react"
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"

export default class anchor extends React.Component {
  render() {
    const Image = () => {
      switch (this.props.options.class) {
        case "twitter":
          return <img src={twitter} />
        case "linkedin":
          return <img src={linkedin} style={{ width: `23px` }} />
      }
    }

    return (
      <a
        className={`button darkmode-ignore ignore-fontSize ${this.props.options.class}`}
        href={this.props.options.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>{Image()}</div>
        <p>
          <span>@</span>
          {/* Add the username here */}
          {this.props.options.username}
        </p>
      </a>
    )
  }
}
