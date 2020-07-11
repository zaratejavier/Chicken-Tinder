import React from 'react'
import CodeDisplay from './CodeDisplay'

export default function CreateUser(props) {
    const code = props.location.state.code
    return (
        <div>
            {console.log(props.location.state.code)}
            <CodeDisplay code={code}/>
            Create user
        </div>
    )
}
