import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"

export default function JoinGroup() {
    const [user, setUser] = useState("");
    const [groupCode, setGroupCode] = useState("");
    const [groupId, setGroupId] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        // Axios.post(`/api/groups`)
        getGroupId();
    }

    const getGroupId = () => {
        Axios.get(`/api/groups/`)
        .then( (res) => {
           const groupObj = res.data.filter(group => 
                group.name === `${groupCode}`
                );
            setGroupId(groupObj[0].id)
            addUser(groupObj[0].id);
        })
        .catch ( (err) => {
            console.log(err)
        })
    }

    const addUser = (groupId) => {
        Axios.post(`api/groups/${groupId}/users`, {username: user})
        .then( (res) => {
            console.log(res.data)
         } )
        .catch( (err) => {
            console.log(err)
        })
        
        // setUser([groupObj, ...users]);
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
                <button type="Submit">join
                    {/* <Link to='/Swipe'>Start Swiping!</Link> */}
                </button>
            </form>
        </div>
    )
}
