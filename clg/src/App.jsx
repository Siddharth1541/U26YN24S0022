import React from 'react'
import Index from './pages'
import Course from './pages/Course'
import About from './pages/about'
import Contact from './pages/contact'
import Header from './pages/Header'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
