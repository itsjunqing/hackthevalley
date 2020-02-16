import React, { Component } from 'react';

class TwilioComponent extends Component {
	constructor(props) {
		super(props);
		this.twilioClick = this.twilioClick.bind(this);
	}

	async twilioClick(event) {
		event.preventDefault();
		const response = await fetch('https://hackthevalley123456789.appspot.com/api/v1/sendMsg');
		console.log(response);
	}

	render() {
		return <h1>Click me</h1>;
	}
}
