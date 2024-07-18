import React from 'react'
import ThemeBtn from './ThemeBtn'

function Navbar() {
  return (
    <>
    <nav className='flex w-full h-12 p-2 bg-pink-300 dark:bg-slate-500 justify-between text-black  dark:text-white'>
    <h2 className='flex w-full h-10 p-2 items-center text-2xl font-semibold'>Filtering</h2>
    <div className='flex justify-between space-x-4'>
        <ThemeBtn/>
        <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" className='mr-2 h-8 w-8 rounded-full' alt="" />
    </div>
    </nav>  
    </>
  )
}

export default Navbar