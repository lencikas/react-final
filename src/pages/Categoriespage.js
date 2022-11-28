import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Page2 = () => {
    const [data, setData] = useState();
    useEffect(() => {
        axios.request(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
            .then(function (response) {
                setData(response);
                console.log(response)
            })
    }, []);
    return (
        <ul>
            {data && data.data.meals.map((elem, index) => <li key={index}>{elem.strCategory}</li>)}
        </ul>
    );
}
export default Page2