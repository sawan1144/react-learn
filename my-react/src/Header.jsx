import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-25 p-9 bg-emerald-400 flex items-center justify-between text-2xl text-white font-bold'>
        <h1>Sawan Panwar</h1>
        <div className='flex text-lg underline gap-9 text-white font-medium'>
            <Link to='/'>Home</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/About'>About</Link>
        </div>
    </div>
  )
}

export default Header