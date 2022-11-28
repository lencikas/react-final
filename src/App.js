import './App.css'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Homepage from './pages/Homepage'
import Navigation from './components/Navigation'
import Page2 from './pages/Categoriespage'
import Page3 from './pages/Kitchenspage'
import Page4 from './pages/Ingredientspage'
import Searchpage from './pages/Searchpage'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Categoriespage' element={<Page2 />} />
        <Route path='/Kitchenspage' element={<Page3 />} />
        <Route path='/Ingredientspage' element={<Page4 />} />
        <Route path='/Searchpage' element={<Searchpage />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </>
  )
}

export default App
