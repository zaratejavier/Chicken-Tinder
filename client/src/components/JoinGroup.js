import React from 'react'
import { Link } from 'react-router-dom'

export default function JoinGroup() {
    return (
        <div>
            Join Group

            <form>
                <label>Input you username</label>
                <input></input>
                <label>Input you group code</label>
                <input></input>
                <Link to='/Swipe'>Start Swiping!</Link>
            </form>
        </div>
    )
}
