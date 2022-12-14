import './Searchpage.css'
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import MealItem from "../components/MealItem"

const Meal = () => {
    const [search, setSearch] = useState()
    const [show, setShow] = useState(false)
    const [item, setItem] = useState("")
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setItem(data.meals)
            setShow(true)
        })
    }, [url])

    const searchRecipe = () => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }

    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Food Recipe Search</h1>
                </div>
                <div className="searchBox">
                    <input type="search" placeholder="enter your recipe here" className="search-bar" onChange={e => setSearch(e.target.value)} onKeyPress={searchRecipe} />
                </div>
                <div className="container">
                    {
                        show ? <MealItem data={item} /> : "aaaa"

                    }
                </div>

            </div>
        </>
    )
}
export default Meal