import React, { Component } from 'react';
import { string } from "prop-types";

class Rectangle extends Component {
	static propTypes = {
		text: string
	}

	render() {
		const { text } = this.props;

		return (
			<button>{ text }</button>
		);
	}
}

export default Rectangle;
