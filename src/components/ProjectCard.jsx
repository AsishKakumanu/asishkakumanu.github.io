import React from 'react'
import PropTypes from 'prop-types'
import '@styles/projectCard.scss'

function ProjectCard({ url, title, description }) {
  return (
    <a
      href={url}
      className="projectCard ButtonHyperLink ignore-fontSize"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="projectCardInnerDiv">
        <div className="projectTitle">{title}</div>
        <div className="projectDesc">
          <div>{description}</div>
        </div>
      </div>
    </a>
  )
}

ProjectCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProjectCard
