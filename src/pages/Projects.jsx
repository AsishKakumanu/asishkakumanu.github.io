import React from 'react'
import { motion } from 'framer-motion'
import SEO from '@components/SEO'
import Header from '@components/Header'
import ProjectCard from '@components/ProjectCard'
import DarkModeToggle from '@components/DarkModeToggle'
import PageTransition from '@components/PageTransition'
import projectData from '@data/projects.json'

const gridVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

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
            variants={gridVariants}
            initial="initial"
            animate="animate"
          >
            {projectData.cells.map((cell) => (
              <motion.div key={cell.title} variants={cardVariants}>
                <ProjectCard
                  title={cell.title}
                  description={cell.description}
                  url={cell.url}
                />
              </motion.div>
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
