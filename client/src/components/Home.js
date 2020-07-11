import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'



export default function Home() {
    const [groupdCode, setGroupCode] = useState('')

    const generateCode = () => {
        return `#${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`
    }

    const createAGroup = () => {
        console.log('create group')
        const code = generateCode()
        console.log(code)
        Axios.post(`/api/groups`, {name: code})
        .then(res => {
            console.log(res)
            //setGroupCode(res.data.name)
            //props.location.push(`/CreateGroup`)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            Home
            <button onClick={() => createAGroup()}>Create a Group</button>
            <button><Link to='/CreateGroup'>Create a Group</Link></button>
            <button><Link to='/JoinGroup'>Join a Group</Link></button>
        </div>
    )
}
