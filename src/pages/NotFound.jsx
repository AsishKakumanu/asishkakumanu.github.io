import React from 'react'
import { motion } from 'framer-motion'
import SEO from '@components/SEO'
import Header from '@components/Header'
import PageTransition from '@components/PageTransition'
import _404Gif from '@images/404-1.png'

function NotFound() {
  return (
    <PageTransition>
      <SEO title="404: Not found" />
      <Header />
      <div className="subHero page404">
        <motion.img
          src={_404Gif}
          alt="404 Error"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </PageTransition>
  )
}

export default NotFound
