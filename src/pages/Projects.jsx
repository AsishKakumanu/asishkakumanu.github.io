import React from 'react'
import SEO from '@components/SEO'
import Header from '@components/Header'
import ProjectCard from '@components/ProjectCard'
import DarkModeToggle from '@components/DarkModeToggle'
import projectData from '@data/projects.json'

function Projects() {
  return (
    <>
      <SEO title="Projects" />
      <Header />
      <div className="Hero page2">
        <div className="SubHero">
          <h3 className="Headline">
            <span className="underline">Projects</span>
          </h3>
          <div className="projectsDiv">
            {projectData.cells.map((cell) => (
              <ProjectCard
                key={cell.title}
                title={cell.title}
                description={cell.description}
                url={cell.url}
              />
            ))}
          </div>
          <br />
        </div>
      </div>
      <DarkModeToggle />
    </>
  )
}

export default Projects
