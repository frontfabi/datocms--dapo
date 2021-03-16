import React, { createContext, useState, useEffect } from 'react'
import { theme } from './theme'

export const ThemeContext = createContext<any>({ theme })

export const ThemeContextProvider = ({ children }) => {
  const [selectedTheme, setTheme] = useState({ })
  
  useEffect(() => {
    setNewTheme(theme)
  }, [])
  const setNewTheme = (newTheme) => setTheme(newTheme)
  
  const themeProviderValue = {
    selectedTheme,
    setNewTheme,
  }

  return <ThemeContext.Provider value={themeProviderValue}>{children}</ThemeContext.Provider>
}