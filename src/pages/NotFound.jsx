import React from 'react'
import SEO from '@components/SEO'
import Header from '@components/Header'
import DarkModeToggle from '@components/DarkModeToggle'
import _404Gif from '@images/404-1.png'

function NotFound() {
  return (
    <>
      <SEO title="404: Not found" />
      <Header />
      <div className="subHero page404">
        <img src={_404Gif} alt="404 Error" />
      </div>
      <DarkModeToggle />
    </>
  )
}

export default NotFound
