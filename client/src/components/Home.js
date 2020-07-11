import React, {useState, useContext} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import { codeContext } from './providers/CodeProvider'



export default function Home(props) {
    const [groupCode, setGroupCode] = useState('')
    const [addingUser, setAddingUser] = useState(false)
    const contextCode = useContext(codeContext)
    const setCode = useContext({ setCode })

    const generateCode = () => {
        return `#${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`
    }

    const createAGroup = () => {
        console.log('create group')
        const code = generateCode()
        Axios.post('api/groups', {name: code})
        .then(res => {
            setGroupCode(res.data.name)
            // props.history.push(`/CreateUser`)
            setAddingUser(true)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            Home
            {console.log(`code is: ${contextCode}`)}
            <button onClick={() => createAGroup()}>Create a Group</button>
            {addingUser && <Redirect to={{
            pathname: '/CreateUser',
            state: { code: groupCode, }
        }}/>}
            <button><Link to='/JoinGroup'>Join a Group</Link></button>
        </div>
    )
}
