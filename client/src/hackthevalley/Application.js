import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Application.css'
import Canvas from './Particles.js'

export default class ServiceForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: '',
			title: '',
			description: '',
			category: '',
			cost: '',
			submit: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	async handleSubmit(event) {
		const { userId, title, description, category, cost } = this.state;
		// console.log(this.state.userId);
		event.preventDefault();
		const response = await fetch(
			`https://hackthevalley123456789.appspot.com/api/v1/serviceCreate?userId=${userId}&title=${title}&category=${category}&description=${description}&cost=${parseInt(
				cost
			)}`
		);
		const data = await response.json();
		console.log(data);
    }
    
    render() {
        return (
          <div class="container">
                <br></br>         
            <div class="col center">
            <form class="application-body" onSubmit={this.handleSubmit}>
            <br></br>
            <h1 class="application-title">Work With Us</h1>
        
        <fieldset>
        <legend><span class="number">1</span>Profile Information</legend>
          <br></br>
          <label for="userId">Name:</label>
          <input class="application-input" type="text" id="userId" name="userId" value={this.state.userId} onChange={this.handleChange}></input>
          
          <label for="title">Title:</label>
          <input class="application-input" type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange}></input>
          
          <label for="category">Category:</label>
          <input class="application-input" type="text" id="category" name="category" value={this.state.category} onChange={this.handleChange}></input>
          
        </fieldset>

        <fieldset>
          <legend><span class="number">2</span>Work Information</legend>
          <br></br>
          <label for="cost">Cost:</label>
          <input class="application-input" type="number" id="cost" name="cost" value={this.state.cost} onChange={this.handleChange}></input>
          
          <label for="description">Description:</label>
          <textarea class="application-input" id="description" name="description" value={this.state.description} onChange={this.description}></textarea>
          
        </fieldset>
    
        <button type="submit">Sign Up</button>
        </form>
        <br></br>
        </div>
        </div>
        )
    }
}
