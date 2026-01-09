import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAtom } from 'jotai'
import { darkModeAtom } from './store/atoms'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const [darkMode] = useAtom(darkModeAtom)

  useEffect(() => {
    // Apply dark mode class to body (matching original Gatsby darkmode-js behavior)
    if (darkMode) {
      document.body.classList.add('darkmode--activated')
    } else {
      document.body.classList.remove('darkmode--activated')
    }
  }, [darkMode])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
