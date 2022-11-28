import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
    return (

        <div className='fixed-header'>
            <div className='header-container'>
            <ul className='ul-wrapper'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Categoriespage'>Categories</Link></li>
                <li><Link to='/Kitchenspage'>Kitchens</Link></li>
                <li><Link to='/Ingredientspage'>Ingredients</Link></li>
                <li><Link to='/Searchpage'>Search Page</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Navigation