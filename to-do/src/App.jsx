import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { ThemeProvider } from './context/theme'

function App() {

  const [themeMode, setThemeMode]= useState('light');

  const darkTheme = ()=>{
    setThemeMode('dark')
  }

  const lightTheme = ()=>{
    setThemeMode('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode)
  })

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
       <Navbar/>
    <div className="flex flex-col items-center justify-start w-full h-screen p-5 bg-white dark:bg-gray-800">
      <Card/>
    </div>
      
    </ThemeProvider>
  )
}

export default App