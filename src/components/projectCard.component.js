import React from "react";

import "../styles/projectCard.scss";

export default class projectCard extends React.Component {
  render() {
    return (
      <a
        href={this.props.url}
        className={`projectCard ignore-fontSize `}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <img className="cardBg" src={require("../images/Planes-min.png")} /> */}
        <div className="projectCardInnerDiv">
          <div className="projectTitle">{this.props.title}</div>
          <div className="projectDesc ">{this.props.description}</div>
        </div>
      </a>
    );
  }
}
