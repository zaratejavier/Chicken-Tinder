import React, {useState} from 'react'
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
             console.log(id[0].id)
             setGroupId(id[0].id)
         } catch(err){console.log(err)}
    }

    const createUser = () => {
        Axios.post(`/api/groups/${groupId}/users`, {username: username})
        .then(res => {
            console.log(res)
            setSwipe(!swipe)
        })
        .catch(err => console.log(err))
    }

    async function handleSubmit(e){
        e.preventDefault()
        await getGroupId().then(
        createUser()
        )
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
                 }
            }}/>}
        </div>
    )
}
