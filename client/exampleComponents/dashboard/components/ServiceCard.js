import React, { Component } from 'react';

export default class ServiceCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { userID, rating, description } = this.props.result;

		return (
			<div style={{ backgroundColor: 'lightblue' }}>
				<h1>{userID}</h1>
				<h2>{rating}/10</h2>
				<p>{description}</p>
			</div>
		);
	}
}
