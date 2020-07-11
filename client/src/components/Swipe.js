import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Swipe() {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {getRestaurant()}, [], );

    const getRestaurant = () => {
        Axios.get(`/api/restaurants`)
            .then((res) => {
            // setRestaurants(res.data)
            console.log(res.data)
             } )
        .catch( (err) => {
            console.log(err)
        })
    }; 
        
    const renderRestaurants = () => {
        return restaurants.map(restaurant => (
            <>
            <h1>{restaurant.name} </h1>
            <h1>{restaurant.cuisine}</h1>
            <h1>{restaurant.image}</h1>
            <h1>{restaurant.menu_items}</h1>
            </>
        ))
    };

   const likeRestaurant = () => {
    Axios.get(`/api/liked_restaurants`)
       .then((res) => {
        // setRestaurants(res.data)
        console.log(res.data)
         } )
        .catch( (err) => {
            console.log(err)
        })
   }

    return (
        <div>
            Swipe
            {renderRestaurants()}
        </div>
    )
}
