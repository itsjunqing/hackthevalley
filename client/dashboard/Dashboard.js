import React, { Component } from 'react';
import ServiceCard from './hackthevalley/ServiceCard';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			search: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		// console.log(event.target.value);
		this.setState({ search: event.target.value });
	}

	async handleSubmit(event) {
		event.preventDefault();
		//fetch api
		console.log(this.state.search);
		const response = await fetch(
			`https://hackthevalley123456789.appspot.com/api/v1/serviceCategory?category=${this.state.search}`
		);
		const { data } = await response.json();
		console.log(data);
		this.setState({
			searchResults: data
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Search:<pre />
						<select value={this.state.search} onChange={this.handleChange}>
							<option value="Electrian">Electrian</option>
							<option value="Handyman">Handyman</option>
							<option value="Mechanic">Mechanic</option>
							<option value="Plumber">Plumber</option>
						</select>
					</label>
					<input type="submit" value="Submit" />
				</form>
				{this.state.searchResults.map((result, key) => {
					return <ServiceCard result={result} key={key} />;
				})}
			</div>
		);

		// return <h1>Hello WOrld</h1>;
	}
}
