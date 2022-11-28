import React from 'react'
import Meal from '../components/Meal'
import './Homepage.css'


const Homepage = () => {
  return (
    <div>
      <h1>
        Out of food recipe ideas? Click this button for a random dish
      </h1>
      <Meal />
    </div>
  )
}

export default Homepage