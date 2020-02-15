import React, { Component }from "react"

function Result(props) {
    if (props.finalresult == true) {
        return (
            <div class="container card mt-3 col-md-4">
                <h1 className="pass"></h1>
            </div>
        )
    } else {
        return (
            <div class="container card mt-3 col-md-4" >
                <h1 className="fail">Time is up!</h1>
            </div>
        )
    }
}

export default Result