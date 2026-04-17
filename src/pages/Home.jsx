import React from 'react'
import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'
import SEO from '@components/SEO'
import Anchor from '@components/Anchor'
import PageTransition from '@components/PageTransition'

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function Home() {
  const age = new Date().getFullYear() - 1994

  return (
    <PageTransition>
      <SEO title="Personal Website" />
      <div className="Hero index">
        <motion.div
          className="SubHero"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3 className="h3Intro noMarginBottom" variants={itemVariants}>
            Hey{' '}
            <span className="h3IntroSpan emoji" role="img" aria-label=":wave:">
              👋🏻
            </span>
            ! My name is <span className="h3IntroSpan Name">Asish Kakumanu</span>
          </motion.h3>
          <motion.p className="IntroPara noMarginBottom font200" variants={itemVariants}>
            I'm a {age} year old{' '}
            <span className="underline font300">
              <ReactTyped
                strings={['Front-end', 'Full-Stack', 'Software']}
                typeSpeed={80}
                backSpeed={50}
                loop
                cursorChar=" "
              />
            </span>
            <span className="underline font300">Developer</span> based in Sunnyvale, California.
          </motion.p>
          <motion.p className="IntroPara font200" variants={itemVariants}>
            By day, I'm an SDE at Amazon, by night I work on personal projects.
          </motion.p>
          <motion.div className="anchorDiv" variants={itemVariants}>
            <Anchor
              options={{
                username: 'Contact Me',
                class: 'linkArrow',
                href: '/contact',
                target: '_self',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="HeroBack" />
    </PageTransition>
  )
}

export default Home
