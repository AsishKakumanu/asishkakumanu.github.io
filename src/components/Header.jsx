import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import favicon from '@images/favicon.png'

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setHasScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${hasScrolled ? 'HeaderScrolled' : 'Header'}`}>
      <div className="headerGroup">
        <a href="/" className="alogo">
          <img className="logo" alt="headerLogo" src={favicon} />
        </a>
        <Link to="/" className="home" id="underline">
          Home
        </Link>
        <Link to="/projects" className="projects" id="underline">
          Projects
        </Link>
        <Link to="/contact" className="contact" id="underline">
          Contact
        </Link>
        <Link to="/about" className="about" id="underline">
          About
        </Link>
      </div>
    </header>
  )
}

export default Header
