import React, { useEffect, useState, } from 'react'
import Axios from 'axios'
import up from './img/up.png'
import down from './img/down.png'
import { Redirect } from 'react-router-dom'

export default function Swipe(props) {
    const code = props.location.state.code
    const username = props.location.state.username
    const groupId = props.location.state.groupId
    const [restaurants, setRestaurants] = useState([])
    const [currentRestaurant, setCurrentRestaurant] = useState('')
    const [weMatched, setWeMatched] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(()=> {
        Axios.get('api/restaurants')
        .then(res => {
            setRestaurants(res.data)
            setCurrentRestaurant(res.data[0])
        })
        .catch(err => console.log(err))
    },[])

    //get all likes
    // have any been liked by everyone?
        // yes => set weMatched to true and pass that restaurant id
        // no => check to see if this one has been liked before?
            //yes => setWeMatched to true and pass that restaurant id
            //no => create a new liked restaurant with a likedcount of 1, a group_id set to this group_id, and a restaurant id set to this restaurant id

    const likeRestaurant = () => {
        Axios.get(`/api/groups/${groupId}/liked_restaurants`)
        .then(res => {
            console.log(res.data)
            if(res.data.length > 0){
                const match = res.data.filter(r => {
                    return r.likedcount > 1
                })
                return (match.length > 0 ? 
                    (setWeMatched(!weMatched)) 
                    : 
                    ( Axios.post(
                        `/api/groups/${groupId}/liked_restaurants/`,
                        { likedcount: 1, group_id: groupId, restaurant_id: currentRestaurant.id }
                        )
                        .then(res=> {
                            console.log('created new liked restaurant:', res.data)
                            setCount(count + 1)
                            setCurrentRestaurant(restaurants[count])
                        })
                        .catch(err => console.log(err))
                    )
                    )
            } else {
                Axios.get(`/api/groups/${groupId}/liked_restaurants/${currentRestaurant.id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.length > 0){
                        setWeMatched(!weMatched)
                        return res.data[0].id
                    } else {
                        Axios.post(
                            `/api/groups/${groupId}/liked_restaurants/`,
                            { likedcount: 1, group_id: groupId, restaurant_id: currentRestaurant.id }
                            )
                            .then(res=> console.log('created new liked restaurant:', res.data))
                            .catch(err => console.log(err))
                    }
            })
            .catch(err => console.log(err))
            }
            setCount(count + 1)
            setCurrentRestaurant(restaurants[count])
        })
    }

    //disliking
    // are there any liked resturants?
    // if not increase the number of the viewed restaurant
    // if there are, do any have a likedcount = # of group member
    // if so return that restaurant
    // if not increase the number of the viewed restaurant

    const dislikeRestaurant = () => {
    Axios.get(`/api/groups/${groupId}/liked_restaurants`)
        .then(res => {
            console.log(res.data)
            //see if there are any liked restaurants with likedcount = # of group members
            if(res.data.length > 0){
            const match = res.data.filter(r => {
                console.log(r.likedcount)
                return r.likedcount > 1
            })
            return (match.length > 0 ? setWeMatched(!weMatched) :  setCount(count + 1), setCurrentRestaurant(restaurants[count]))
            //if so set we matched to true and pass the id of the matched restaurant
            } else {
                setCount(count + 1)
                setCurrentRestaurant(restaurants[count])
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            {console.log(props)}
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', border:'3px solid black', borderRadius:'30px'}}>
                <h1 style={{margin:'40px'}}>{currentRestaurant.name}</h1>
                <img src={currentRestaurant.image} style={{margin:'40px'}}/>
                <h3 style={{margin:'40px'}}>Cuisine: {currentRestaurant.cuisine}</h3>
                <div style={{display:'flex', margin:'40px'}}>
                    <button onClick={() => dislikeRestaurant()}><img src={down}/></button>
                    <div style={{width:'30px'}}/>
                    <button>View Menu</button>
                    <div style={{width:'30px'}}/>
                    <button onClick={() => likeRestaurant()}><img src={up}/></button>
                    {weMatched && <Redirect to={{
                pathname: '/Match',
                state: { 
                    code: code,
                    username: username,
                    groupId: groupId,
                    restaurant_id: currentRestaurant.id,
                 }}
                 }
                 />}
                </div>
            </div>
        </div>
    )
}
