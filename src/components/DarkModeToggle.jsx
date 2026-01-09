import React from 'react'
import { useAtom } from 'jotai'
import { darkModeAtom } from '@/store/atoms'
import './DarkModeToggle.css'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button
      className={`darkmode-toggle ${darkMode ? 'darkmode-toggle--dark' : 'darkmode-toggle--light'}`}
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="darkmode-toggle__icon">
        {darkMode ? '☀️' : '🌙'}
      </span>
    </button>
  )
}

export default DarkModeToggle
