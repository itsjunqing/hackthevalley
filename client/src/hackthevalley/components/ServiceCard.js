import React, { Component } from 'react';
import image6 from "./image6.jpg"
import image7 from "./image7.jpg"
import image8 from "./image8.jpg"
import image9 from "./image9.jpg"

export default class ServiceCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { userID, rating, cost, description } = this.props.result;
		console.log(userID)
		if (userID == 'Bob D') {
			return (
				<div class="container card mt-3" style={{ backgroundColor: "rgb(245, 255, 236)" }}>
					<br></br>
					<div class="row justify-content-around">
					<div class="col" id="image-center1">
						<img className="img-responsive3" src={image6} alt="logo"/>
					</div>
					<div class="col col-lg-6">
						<h1>{userID}</h1>
						<hr></hr>
						<h3>Rating: {rating}/10</h3>
						<h5>Reviews: {description}</h5>
						<button type="submit">Contact Me!</button>
					</div>
					</div>
					<br></br>
				</div>
			)
		} else if (userID == 'Ervin Howell') {
			return (
				<div class="container card mt-3" style={{ backgroundColor: "rgb(245, 255, 236)" }}>
					<br></br>
					<div class="row justify-content-around">
					<div class="col" id="image-center1">
						<img className="img-responsive3" src={image7} alt="logo"/>
					</div>
					<div class="col col-lg-6">
						<h1>{userID}</h1>
						<hr></hr>
						<h3>Rating: {rating}/10</h3>
						<h5>Reviews: {description}</h5>
						<button type="submit">Contact Me!</button>
					</div>
					</div>
					<br></br>
				</div>
			)	
		} else if (userID == 'Patricia Lebsack') {
			return (
				<div class="container card mt-3" style={{ backgroundColor: "rgb(245, 255, 236)" }}>
					<br></br>
					<div class="row justify-content-around">
					<div class="col" id="image-center1">
						<img className="img-responsive3" src={image8} alt="logo"/>
					</div>
					<div class="col col-lg-6">
						<h1>{userID}</h1>
						<hr></hr>
						<h3>Rating: {rating}/10</h3>
						<h5>Reviews: {description}</h5>
						<button type="submit">Contact Me!</button>
					</div>
					</div>
					<br></br>
				</div>
			)
		} else if (userID == "Kurtis Weissnat" ){
			return (
				<div class="container card mt-3" style={{ backgroundColor: "rgb(245, 255, 236)" }}>
					<br></br>
					<div class="row justify-content-around">
					<div class="col" id="image-center1">
						<img className="img-responsive3" src={image9} alt="logo"/>
					</div>
					<div class="col col-lg-6">
						<h1>{userID}</h1>
						<hr></hr>
						<h3>Rating: {rating}/10</h3>
						<h5>Reviews: {description}</h5>
						<button type="submit">Contact Me!</button>
					</div>
					</div>
					<br></br>
				</div>
			)
		} else {
			return (
			<div class="container card mt-3" style={{ backgroundColor: "rgb(245, 255, 236)" }}>
					<br></br>
					<div class="row justify-content-around">
					<div class="col">
					</div>
					<div class="col col-lg-6">
						<h1>{userID}</h1>
						<hr></hr>
						<h3>Rating: {rating}/10</h3>
						<h5>Reviews: {description}</h5>
						<button type="submit">Contact Me!</button>
					</div>
					</div>
					<br></br>
			</div>
			)
		}
	}
}