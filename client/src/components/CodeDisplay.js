import React from 'react'

export default function CodeDisplay(props) {
    return (
        <div style={{backgroundColor:'#E9692C', textAlign:'center'}}>
            <h1>Your Code is: {props.code}</h1>
        </div>
    )
}
