import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const pageTransition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1],
}

const PageTransition = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
  >
    {children}
  </motion.div>
)

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTransition
