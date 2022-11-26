import './App.css'
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Homepage from './pages/Homepage'
import Navigation from './components/Navigation'
import Page2 from './pages/page2'
import Page3 from './pages/page3'

function App() {

  const [quote, setQuote] = useState('Hello');
  const [author, setAuthor] = useState('World');

  useEffect(() => {
    fetch('http://api.quotable.io/random')
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content)
          setAuthor(quote.author)
        }
      )
  },[])

  let fetchNewQuote = () => {
    fetch('http://api.quotable.io/random')
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content)
          setAuthor(quote.author)
        }
      )
  }

  return (
    <div className='App'>
      <div className='quote'>
        <h2>{quote}</h2>
        <small>{author}</small>
      </div>
      <button className='btn' onClick={fetchNewQuote}>Generate New Quote</button>

      {/* <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3/>} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes> */}
    </div>
  )
}

export default App
