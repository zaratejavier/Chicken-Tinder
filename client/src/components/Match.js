import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Match(props) {
    const groupId = props.location.state.groupId
    const [match, setMatch] = useState('')

    useEffect(() => {
        Axios.get(`/api/groups/${groupId}/liked_restaurants`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h1>It's a Match!</h1>
            {console.log(props)}
        </div>
    )
}
