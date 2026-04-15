import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import DarkModeToggle from '@components/DarkModeToggle'
import SpotifyWidget from '@components/SpotifyWidget'
import '@styles/declare.scss'
import '@styles/index.scss'
import '@styles/page-2.scss'
import '@styles/404.scss'
import '@styles/queries.scss'
import '@styles/contact.scss'
import '@styles/about.scss'

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <>
      <main>{children}</main>
      <footer></footer>
      <DarkModeToggle />
      {location.pathname === '/' && <SpotifyWidget />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
