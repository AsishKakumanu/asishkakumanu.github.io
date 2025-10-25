import React from 'react'
import PropTypes from 'prop-types'
import '@styles/declare.scss'
import '@styles/index.scss'
import '@styles/page-2.scss'
import '@styles/404.scss'
import '@styles/queries.scss'
import '@styles/contact.scss'
import '@styles/about.scss'

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
