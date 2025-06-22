import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Header from './Header'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App