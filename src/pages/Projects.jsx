import React from 'react'
import { motion } from 'framer-motion'
import SEO from '@components/SEO'
import Header from '@components/Header'
import ProjectCard from '@components/ProjectCard'
import DarkModeToggle from '@components/DarkModeToggle'
import PageTransition from '@components/PageTransition'
import projectData from '@data/projects.json'

const headlineVariants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

function Projects() {
  return (
    <PageTransition>
      <SEO title="Projects" />
      <Header />
      <div className="Hero page2">
        <div className="SubHero">
          <motion.h3
            className="Headline"
            variants={headlineVariants}
            initial="initial"
            animate="animate"
          >
            <span className="underline">Projects</span>
          </motion.h3>
          <motion.div
            className="projectsDiv"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {projectData.cells.map((cell) => (
              <ProjectCard
                key={cell.title}
                title={cell.title}
                description={cell.description}
                url={cell.url}
              />
            ))}
          </motion.div>
          <br />
        </div>
      </div>
      <DarkModeToggle />
    </PageTransition>
  )
}

export default Projects
