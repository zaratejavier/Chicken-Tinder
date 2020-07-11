import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"

export default function JoinGroup() {
    const [user, setUser] = useState("");
    const [groupCode, setGroupCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Axios.post(`/api/groups`)
        Axios.get(`/api/getgroup/${groupCode}`)
        .then( (res) => (
            console.log(res.data)
        ) )
    }

    const addUser = () => {
        Axios.get(`/api/getgroup/${groupCode}`)
        .then( (res) => (
            console.log(res.data)
        ) )
    }

    return (
        <div>
            Join Group

            <form onSubmit={() => handleSubmit()}>
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
                <button type="Submit">add
                    {/* <Link to='/Swipe'>Start Swiping!</Link> */}
                </button>
            </form>
        </div>
    )
}
