import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
    return (

        <div className='fixed-header'>
            <div className='header-container'>
            <ul className='ul-wrapper'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/page2'>Page2</Link></li>
                <li><Link to='/page3'>Page3</Link></li>
                <li><Link to='/searchpage'>Search Page</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Navigation