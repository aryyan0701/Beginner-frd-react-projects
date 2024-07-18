import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/Theme'
import Hero from './components/Hero'

function App() {

  const[themeMode, setThemeMode]= useState('light')

  const lightTheme = ()=>{
    setThemeMode('light')
  }

  const darkTheme = ()=>{
    setThemeMode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
     <Navbar/>
    <Hero/>
    </ThemeProvider>
  )
}

export default App