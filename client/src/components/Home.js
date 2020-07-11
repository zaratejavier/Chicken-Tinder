import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            Home
            <Link to='/CreateGroup'>Create a Group</Link>
            <Link to='/JoinGroup'>Join a Group</Link>
        </div>
    )
}
