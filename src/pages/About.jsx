import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '@components/SEO'
import Header from '@components/Header'
import AboutMe from '@components/AboutMe'
import DarkModeToggle from '@components/DarkModeToggle'
import PageTransition from '@components/PageTransition'
import myPic from '@images/myPortrait2.jpeg'
import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaReact,
  FaAngular,
  FaSass,
  FaLess,
  FaGithub,
  FaJava,
  FaBootstrap,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { DiJqueryLogo, DiAndroid } from 'react-icons/di'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { GrHadoop } from 'react-icons/gr'

const collapseGroupVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const collapseItemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const portraitVariants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

const resumeVariants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

// Simple Collapse component with animated open/close
const Collapse = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <motion.div className="collapse" variants={collapseItemVariants}>
      <div className="view" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        <div className="title">{title}</div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="content">
              <div className="content">{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

Collapse.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  defaultOpen: PropTypes.bool,
}

function About() {
  return (
    <PageTransition>
      <SEO title="About" />
      <Header />
      <div className="Hero about">
        <div className="AboutSubHero">
          <div className="container">
            <motion.div
              className="resumeContainer"
              variants={resumeVariants}
              initial="initial"
              animate="animate"
            >
              <a
                href="https://buffalo.box.com/s/o526dbqtolu813hay9yct76m805kapdd"
                target="_blank"
                rel="noopener noreferrer"
                className="Download"
              >
                <button className="resume darkmode-ignore">
                  Download Resume
                </button>
              </a>
            </motion.div>
            <div className="aboutSection">
              <div className="leftContainer darkmode-ignore">
                <motion.div
                  className="collapseGroup"
                  variants={collapseGroupVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Collapse title="Experience 💼" defaultOpen={true}>
                    <AboutMe
                      options={{
                        header: 'Research Intern',
                        subheader: 'University at Buffalo',
                        class: 'ub',
                        dates: 'Present',
                      }}
                    />
                    <AboutMe
                      options={{
                        header: 'Software Developer',
                        subheader: 'Standard Chartered GBS',
                        class: 'scb',
                        dates: 'May 2016 - June 2018',
                      }}
                    />
                    <AboutMe
                      options={{
                        header: 'Intern',
                        subheader: 'Bharat Sanchar Nigam Limited India',
                        class: 'bsnl',
                        dates: 'May 2014 - June 2014',
                      }}
                    />
                  </Collapse>
                  <Collapse title="Education 🎓">
                    <AboutMe
                      options={{
                        header: 'M.S in Computer Science',
                        subheader: 'University at Buffalo',
                        class: 'ub',
                        dates: 'Aug 2018 - Dec 2019',
                      }}
                    />
                    <AboutMe
                      options={{
                        header: 'B.Tech in Computer Science',
                        subheader: 'SRM University',
                        class: 'srm',
                        dates: 'Aug 2012 - May 2016',
                      }}
                    />
                  </Collapse>
                  <Collapse title="Skills 🔧">
                    <div className="icons">
                      <FaHtml5 title="HTML" />
                      <FaCss3 title="CSS" />
                      <FaSass title="SASS" />
                      <FaLess title="Less" />
                      <IoLogoJavascript title="JavaScript" />
                      <FaPython title="Python" />
                      <FaReact title="React" />
                      <FaAngular title="Angular" />
                      <DiJqueryLogo title="JQuery" />
                      <AiOutlineConsoleSql title="SQL" />
                      <FaJava title="Java" />
                      <DiAndroid title="Android" />
                      <FaGithub title="Git" />
                      <FaBootstrap title="Bootstrap" />
                      <GrHadoop title="Hadoop" />
                    </div>
                  </Collapse>
                </motion.div>
              </div>
              <motion.div
                className="rightContainer"
                variants={portraitVariants}
                initial="initial"
                animate="animate"
              >
                <img
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  src={myPic}
                  alt="Asish Kakumanu"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <DarkModeToggle />
    </PageTransition>
  )
}

export default About
