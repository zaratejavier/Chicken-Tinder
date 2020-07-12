import React, { useState, useEffect, } from 'react'
import CodeDisplay from './CodeDisplay'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default function CreateUser(props) {
    const code = props.location.state.code
    const [username, setUsername] = useState('')
    const [swipe, setSwipe] = useState(false)
    const [groupId, setGroupId] = useState('')

    async function getGroupId(){
         //get the group id by passing the group code to the backend
         try{
         const res = await Axios.get(`/api/groups`)
             const id = res.data.filter(group => group.name ===`${code}`)
             setGroupId(id[0].id)
             const hardCodedGroupId = id[0].id
            // why cant we use groupId from state in create user here??
         } catch(err){console.log(err)}
    }
    useEffect(() => {
        getGroupId()
    },[])

    const createUser = (group_id) => {
        console.log('create user called')
        Axios.post(`/api/groups/${group_id}/users`, {username: username})
        .then(res => {
            setSwipe(!swipe)
        })
        .catch(err => console.log(err))
    }

    async function handleSubmit(e){
        e.preventDefault()
        createUser(groupId)
    }

    return (
        <div>
            <CodeDisplay code={code}/>
            Create user
            <form onSubmit={handleSubmit}>
                <label> Enter your username</label>
                <input value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                <button type='submit'>Start Swiping</button>
            </form>
            {swipe && <Redirect to={{
                pathname: '/Swipe',
                state: { 
                    code: code,
                    username: username,
                    groupId: groupId,
                 }
            }}/>}
        </div>
    )
}
