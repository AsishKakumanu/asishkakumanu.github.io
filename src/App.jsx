import React, { useEffect, useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useAtom } from 'jotai'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { darkModeAtom } from './store/atoms'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const location = useLocation()

  // Apply theme immediately on mount to prevent flash
  useLayoutEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('darkMode')

    if (savedTheme === null) {
      // No saved preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
    }

    // Prevent transition flash on initial load
    document.documentElement.classList.add('no-transitions')

    // Apply theme
    const theme = savedTheme !== null ? JSON.parse(savedTheme) : window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.setAttribute('data-theme', theme ? 'dark' : 'light')

    // Remove no-transitions class after a short delay
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove('no-transitions')
      })
    })
  }, [])

  // Update theme when darkMode state changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    // Keep the old class for backwards compatibility with existing styles
    if (darkMode) {
      document.body.classList.add('darkmode--activated')
    } else {
      document.body.classList.remove('darkmode--activated')
    }
  }, [darkMode])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e) => {
      // Only update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('darkMode')
      if (savedTheme === null) {
        setDarkMode(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [setDarkMode])

  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </MotionConfig>
  )
}

export default App
