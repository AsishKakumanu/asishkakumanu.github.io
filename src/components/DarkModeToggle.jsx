import React from 'react'
import { useAtom } from 'jotai'
import { darkModeAtom } from '@/store/atoms'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button
      className="darkmode-toggle"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      style={{
        position: 'fixed',
        bottom: '15px',
        left: '15px',
        zIndex: 1000,
        backgroundColor: darkMode ? '#100f2c' : '#fff',
        color: darkMode ? '#fff' : '#100f2c',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        fontSize: '24px',
        cursor: 'pointer',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        transition: 'all 0.4s ease'
      }}
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  )
}

export default DarkModeToggle
