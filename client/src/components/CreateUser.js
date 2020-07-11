import React, {useState} from 'react'
import CodeDisplay from './CodeDisplay'
import Axios from 'axios'

export default function CreateUser(props) {
    const code = props.location.state.code
    const [username, setUsername] = useState('')

    const handleSubmit = () => {
        e.preventDefault()
        Axios.post(`/api/groups/:group_id/users`)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            {console.log(props.location.state.code)}
            <CodeDisplay code={code}/>
            Create user
            <form onSubmit={()=> handleSubmit()}>
                <label> Enter your username</label>
                <input value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                <button type='submit'>Start Swiping</button>
            </form>
        </div>
    )
}
