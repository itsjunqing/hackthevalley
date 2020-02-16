import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Application.css'

class Feedback extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            workername: "",
            rating: "",
            comment: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div class="container">
                <div class="col center">
                <br></br>
            <form class="application-body">
            <br></br>
            <h1 class="application-title">Submit a Review</h1>
        
        <fieldset>
        <legend><span class="number">1</span>Basic Information</legend>
          <br></br>
          <label for="username">Name:</label>
          <input class="application-input" type="text" id="username" name="username"></input>
          
          <label for="email">Email:</label>
          <input class="application-input" type="email" id="email" name="email"></input>
          
          <label for="workername">Worker's name:</label>
          <input class="application-input" type="text" id="workername" name="workername"></input>
          
        </fieldset>

        <fieldset>
          <legend><span class="number">2</span>Feedback</legend>
          <br></br>
          <label for="rating">Rating:</label>
          <input class="application-input" type="number" id="rating" name="rating"></input>
          
          <label for="comment">Comments:</label>
          <textarea class="application-input" id="comment" name="comment"></textarea>
        </fieldset>
    
        <button type="submit">Submit</button>
        </form>
        <br></br>
        </div>
        </div>
        )
    }
}

export default Feedback

/*
<form>
                <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                <br />
                <input type="text" name="workername" placeholder="Worker's Name" onChange={this.handleChange} />
                <br /> 
                <input type="number" name="rating" placeholder="Rating" onChange={this.handleChange} />
                <br />
                <input type="textarea" name="comment" placeholder="Comment" onChange={this.handleChange} />
                <br />
                <button>Submit</button>
            </form>

            */