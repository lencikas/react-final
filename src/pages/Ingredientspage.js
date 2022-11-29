import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'react';

const Page4 = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.request(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            .then(function (response) {
                setData(response);
                console.log(response)
            })
    }, [])
    return (
        <ul>
            {data && data.data.meals.map((elem, index) => <li key={index}>{elem.strIngredient}</li>)}
        </ul>
    );
}
export default Page4