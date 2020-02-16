import React, { Component } from 'react';

export default class ServiceCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { userID, rating, description } = this.props.result;

		return (
			<div class="container card mt-3" style={{ backgroundColor: "rgb(245, 255, 236)" }}>
				<br></br>
				<p>
					<img src={require('./certified.png')} width={50} align="right"/>
					<h1>{userID}</h1>
					<button class="hellllo"> Book now! </button>
				</p>
                <hr></hr>
				<h3>Rating: {rating}/10</h3>
				<h5>Reviews: {description}</h5>
                <br></br>
			</div>
		);
	}
}