import React, { useState, useEffect } from 'react'
import { Button } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Meal = () => {
  const [food, setFood] = useState([])

  const fetchFood = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setFood(data.meals)
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <>
      <div className="button">
        <Button onClick={() => fetchFood()} className="btn">
          Generate Random Meal
        </Button>
      </div>
      <section className="meals">
        {food.map((f) => {
          const {
            idMeal,
            strMeal,
            strInstructions,
            strMealThumb,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
            strMeasure16,
            strMeasure17,
            strMeasure18,
            strMeasure19,
            strMeasure20,
          } = f

          return (
            <article key={idMeal}>
              <div className='article-wrapper'>
                <div className='photo'>
                  <h2>
                    <span></span> {strMeal}
                  </h2>

                  <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className='ingredients'>
                  <ul>
                    <p>Ingredients:</p>
                    <li>
                      {strMeasure1} {strIngredient1}
                    </li>
                    <li>
                      {strMeasure2} {strIngredient2}
                    </li>
                    <li>
                      {strMeasure3} {strIngredient3}
                    </li>
                    <li>
                      {strMeasure4} {strIngredient4}
                    </li>
                    <li>
                      {strMeasure5} {strIngredient5}
                    </li>
                    <li>
                      {strMeasure6} {strIngredient6}
                    </li>
                    <li>
                      {strMeasure7} {strIngredient7}
                    </li>
                    <li>
                      {strMeasure8} {strIngredient8}
                    </li>
                    <li>
                      {strMeasure9} {strIngredient9}
                    </li>
                    <li>
                      {strMeasure10} {strIngredient10}
                    </li>
                    <li>
                      {strMeasure11} {strIngredient11}
                    </li>
                    <li>
                      {strMeasure12} {strIngredient12}
                    </li>
                    <li>
                      {strMeasure13} {strIngredient13}
                    </li>
                    <li>
                      {strMeasure14} {strIngredient14}
                    </li>
                    <li>
                      {strMeasure15} {strIngredient15}
                    </li>
                    <li>
                      {strMeasure16} {strIngredient16}
                    </li>
                    <li>
                      {strMeasure17} {strIngredient17}
                    </li>
                    <li>
                      {strMeasure18} {strIngredient18}
                    </li>
                    <li>
                      {strMeasure19} {strIngredient19}
                    </li>
                    <li>
                      {strMeasure20} {strIngredient20}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3>How to cook</h3>
                <p>{strInstructions}</p>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Meal
