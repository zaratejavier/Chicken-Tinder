import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import up from './img/up.png'
import down from './img/down.png'

export default function Swipe() {
    const [restaurants, setRestaurants] = useState([])
    const [currentRestaurant, setCurrentRestaurant] = useState('')

    useEffect(()=> {
        Axios.get('api/restaurants')
        .then(res => {
            setRestaurants(res.data)
            setCurrentRestaurant(res.data[0])
        })
        .catch(err=> console.log(err))
    }, [])


    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', border:'3px solid black', borderRadius:'30px'}}>
                <h1 style={{margin:'40px'}}>{currentRestaurant.name}</h1>
                <img src={currentRestaurant.image} style={{margin:'40px'}}/>
                <h3 style={{margin:'40px'}}>Cuisine: {currentRestaurant.cuisine}</h3>
                <div style={{display:'flex', margin:'40px'}}>
                    <img src={down}/>
                        <button>View Menu</button>
                    <img src={up}/>
                </div>
            </div>
        </div>
    )
}
