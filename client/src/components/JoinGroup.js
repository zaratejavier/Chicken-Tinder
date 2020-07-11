import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"

export default function JoinGroup() {
    const [user, setUser] = useState("");
    const [groupCode, setGroupCode] = useState("");

    const handleSubmit = () => {
        e.preventDefault();
        Axios.post()

    }

    const addUser = (groupCode) => {
        
    }

    return (
        <div>
            Join Group

            <form onSubmit={handleSubmit}>
                <label>Input your username: </label>
                    <input 
                        value={user} 
                        onChange={(e) => setUser(e.target.value)}>
                    </input>
                <br />
                <br />
                <label>Input your group code: </label>
                <input 
                    value={groupCode} 
                    onChange={(e) => setGroupCode(e.target.value)}>
                </input>
                <br />
                <br />
                <button>
                    <Link to='/Swipe'>Start Swiping!</Link>
                </button>
            </form>
        </div>
    )
}
