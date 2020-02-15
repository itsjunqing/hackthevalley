import React from "react"

function ResultExtra(props) {
    if (props.passtest == true) {
        return (
            <div class="container card mt-3">
                <h4 className="pass">You have passed!</h4>
            </div>
        )
    } else {
        return (
            <div class="container card mt-3" >
                <h4 className="fail">Not Correct!</h4>
            </div>
        )
    }
}

export default ResultExtra