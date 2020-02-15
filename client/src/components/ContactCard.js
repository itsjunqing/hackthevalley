import React from "react"

function ContactCard(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard