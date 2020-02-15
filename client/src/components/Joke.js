import React from "react"

function Joke(props) {
    return (
        <div>
            <h1 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h1>
            <p stlye={{color: !props.question && "#888888"}}>Punchline: {props.punchline}</p>
        </div>
    )
}

export default Joke