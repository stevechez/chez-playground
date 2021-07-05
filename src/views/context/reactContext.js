import React, { useState } from 'react'
import FunctionContextComponent from '../../components/context/FunctionContextComponent'

export const ThemeContext = React.createContext()

export default function ReactContext() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  )
}