import React, { Component } from 'react';
import ServiceCard from './ServiceCard';
import './Dashboard.css'

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
			<div class="dashboard-position">
                <br></br>
                <br></br>
                <br></br>
                <div class="dashboard-search" class="container card">
				<form onSubmit={this.handleSubmit}>
                    <br></br>
					<label class="dashboard-label">
						<h1>Find Your Workers Here!</h1><pre />
						<select class="dashboard-options" value={this.state.search} onChange={this.handleChange}>
							<option value="Electrian">Electrian</option>
							<option value="Handyman">Handyman</option>
							<option value="Mechanic">Mechanic</option>
							<option value="Plumber">Plumber</option>
						</select>
					</label>
                    <div class="dashboard-submit">
                    <input class="dashboard-options" type="submit" value="Submit" />
                    </div>
                    <br></br>
				</form>
				{this.state.searchResults.map((result, key) => {
					return <ServiceCard result={result} key={key} />;
				})}
                </div>
			</div>
		);
	}
}
