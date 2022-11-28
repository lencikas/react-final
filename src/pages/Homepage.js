import React from 'react'
import Meal from '../components/meal'
import './Homepage.css'


const Homepage = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl lg:text-6xl mt-10">
        Random meal generator
      </h1>
      <Meal />
    </div>
  )
}

export default Homepage