import React, { useState } from 'react'
import SEO from '@components/SEO'
import Header from '@components/Header'
import AboutMe from '@components/AboutMe'
import DarkModeToggle from '@components/DarkModeToggle'
import resume from '@images/resume.png'
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

// Simple Collapse component replacement
const Collapse = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="collapse-container" style={{ marginBottom: '1rem' }}>
      <div
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '1rem',
          backgroundColor: '#f5f5f5',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: '500',
        }}
      >
        {title}
      </div>
      {isOpen && (
        <div className="collapse-content" style={{ padding: '1rem' }}>
          {children}
        </div>
      )}
    </div>
  )
}

function About() {
  return (
    <>
      <SEO title="About" />
      <Header />
      <div className="Hero about">
        <div className="AboutSubHero">
          <div className="container">
            <div className="resumeContainer">
              <a
                href="https://buffalo.box.com/s/o526dbqtolu813hay9yct76m805kapdd"
                target="_blank"
                rel="noopener noreferrer"
                className="Download"
              >
                <button className="resume darkmode-ignore" style={{
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  Download Resume
                </button>
              </a>
            </div>
            <div className="aboutSection">
              <div className="leftContainer darkmode-ignore">
                <div className="collapseGroup">
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
                </div>
              </div>
              <div className="rightContainer">
                <img
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  src={myPic}
                  alt="Asish Kakumanu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DarkModeToggle />
    </>
  )
}

export default About
