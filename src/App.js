import './App.css'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Homepage from './pages/Homepage'
import Navigation from './components/Navigation'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Searchpage from './pages/searchpage'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/page4' element={<Page4 />} />
        <Route path='/searchpage' element={<Searchpage />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </>
  )
}

export default App
