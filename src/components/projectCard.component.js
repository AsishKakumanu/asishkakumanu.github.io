// Imports
import React from "react";

// CSS
import "../styles/projectCard.scss";

function ProjectCard(props) {
  return (
    <a
      href={props.url}
      className={`projectCard ButtonHyperLink ignore-fontSize`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="projectCardInnerDiv">
        <div className="projectTitle">{props.title}</div>
        <div className="projectDesc">
          <div>{props.description}</div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
