// Imports
import React from "react";
import { Link2 } from "@zeit-ui/react-icons";

// CSS
import "../styles/projectCard.scss";

function ProjectCard(props) {
  return (
    <div className={`projectCard ignore-fontSize`}>
      <div className="projectCardInnerDiv">
        <div className="projectTitle">{props.title}</div>
        <div className="projectDesc">
          <div>{props.description}</div>
          <a
            href={props.url}
            className={`ButtonHyperLink ignore-fontSize`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link2 />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
