import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const CreateAGroup = () => {
        
    }

    return (
        <div>
            Home
            <button><Link to='/CreateGroup'>Create a Group</Link></button>
            <button><Link to='/JoinGroup'>Join a Group</Link></button>
        </div>
    )
}
