import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'



export default function Home(props) {
    const [groupCode, setGroupCode] = useState('')
    const [addingUser, setAddingUser] = useState(false)

    const generateCode = () => {
        return `#${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`
    }

    const createAGroup = () => {
        console.log('create group')
        const code = generateCode()
        console.log(code)
        Axios.post('api/groups', {name: code})
        .then(res => {
            setGroupCode(res.data.name)
            // props.history.push(`/CreateUser`)
            setAddingUser(true)
        })
        .catch(err => console.log(err))
    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            Home
            <button onClick={() => createAGroup()}>Create a Group</button>
            {addingUser && <Redirect to={{
            pathname: '/CreateUser',
            state: { code: groupCode, }
        }}/>}
            <button><Link to='/JoinGroup'>Join a Group</Link></button>
        </div>
    )
}
