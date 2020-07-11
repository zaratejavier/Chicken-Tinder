import React, {useState} from 'react'
import CodeDisplay from './CodeDisplay'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default function CreateUser(props) {
    const code = props.location.state.code
    const [username, setUsername] = useState('')
    const [swiping, setSwiping] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        //get the group id by passing the group code to the backend
        Axios.get(`/api/groups?name=${code}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        Axios.post(`/api/groups/:group_id/users`)
        .then(res => {
            console.log(res)
            setSwiping(!swiping)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <CodeDisplay code={code}/>
            Create user
            <form onSubmit={()=> handleSubmit()}>
                <label> Enter your username</label>
                <input value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                <button type='submit'>Start Swiping</button>
            </form>
            {swiping && <Redirect  to={{
            pathname: '/Swipe',
            state: { 
                code: code, 
                username: username
                }
            }}/> }
        </div>
    )
}
