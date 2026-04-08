import React from 'react'
import { motion } from 'framer-motion'
import SEO from '@components/SEO'
import Header from '@components/Header'
import Anchor from '@components/Anchor'
import DarkModeToggle from '@components/DarkModeToggle'
import PageTransition from '@components/PageTransition'

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const formVariants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

const linkListVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

function Contact() {
  return (
    <PageTransition>
      <SEO title="Contact" />
      <Header />
      <div className="Hero contactPage">
        <div className="contactSubHero">
          <div className="contactContainer">
            <motion.div
              className="linksDiv"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h3 className="linkHeader" variants={itemVariants}>
                <span className="underline">Links</span>
              </motion.h3>
              <motion.p className="contactPara fontWeight350" variants={itemVariants}>
                Here are all the ways you can connect to me or follow my work. I'm mostly active
                in Linkedin{' '}
                <span className="darkmode-ignore" role="img" aria-label=":suitcase:">
                  💼
                </span>{' '}
                <span style={{ fontWeight: '200', fontSize: '20px' }}>&</span> Instagram{' '}
                <span className="darkmode-ignore" role="img" aria-label=":camera:">
                  📸
                </span>
                .
              </motion.p>
              <motion.div
                className="linkContainer"
                variants={linkListVariants}
              >
                <motion.div variants={itemVariants}>
                  <Anchor
                    options={{
                      username: 'asishkakumanu',
                      class: 'insta',
                      href: 'https://www.instagram.com/asishkakumanu/',
                      target: '_blank',
                    }}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Anchor
                    options={{
                      username: 'asishkakumanu',
                      class: 'linkedin',
                      href: 'https://www.linkedin.com/in/asishkakumanu/',
                      target: '_blank',
                    }}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Anchor
                    options={{
                      username: 'AsishKakumanu',
                      class: 'github',
                      href: 'https://github.com/AsishKakumanu',
                      target: '_blank',
                    }}
                  />
                </motion.div>
              </motion.div>
              <motion.p className="contactPara fontWeight350" variants={itemVariants}>
                Wanna have a quick chat?
              </motion.p>
              <motion.div className="linkContainer2" variants={itemVariants}>
                <Anchor
                  options={{
                    username: 'AsishKakumanu',
                    class: 'telegram',
                    href: 'https://t.me/AsishKakumanu',
                    target: '_blank',
                  }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="contactInfo darkmode-ignore"
              variants={formVariants}
              initial="initial"
              animate="animate"
            >
              <h3 className="header">
                <span className="underline">Let's Discuss!</span>{' '}
                <span className="darkmode-ignore" role="img" aria-label=":nerd:">
                  🤓
                </span>
              </h3>
              <form
                action="https://getform.io/f/f4b3a745-10da-416a-90cc-f2c7cc5c7560"
                method="POST"
              >
                <div className="firstRow">
                  <div className="name">
                    <label htmlFor="name" type="text" className="labelForName">
                      Name
                    </label>
                    <input
                      className="nameInput"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="email">
                    <label htmlFor="email" className="labelForEmail">
                      Email
                    </label>
                    <input
                      className="emailInput"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="secondRow">
                  <div className="subject">
                    <label htmlFor="subject" className="labelForSubject">
                      Subject
                    </label>
                    <input
                      className="subjectInput"
                      type="text"
                      name="subject"
                      placeholder="Enter Subject"
                    />
                  </div>
                  <div className="message">
                    <label htmlFor="message" className="labelForMessage">
                      Message
                    </label>
                    <textarea rows="4" name="message" className="messageInput" />
                  </div>
                  <button className="mailButton" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <DarkModeToggle />
    </PageTransition>
  )
}

export default Contact
