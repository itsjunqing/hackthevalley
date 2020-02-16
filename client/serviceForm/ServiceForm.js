import React, { Component } from 'react';

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
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						userId:
						<input type="text" id="userId" value={this.state.userId} onChange={this.handleChange} />
					</label>
					<br />
					<label>
						title:
						<input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
					</label>
					<br />
					<label>
						description:
						<input
							type="text"
							id="description"
							value={this.state.description}
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<label>
						category:
						<input type="text" id="category" value={this.state.category} onChange={this.handleChange} />
					</label>
					<br />
					<label>
						cost:
						<input type="text" id="cost" value={this.state.cost} onChange={this.handleChange} />
					</label>
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
