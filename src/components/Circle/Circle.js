import React, { Component } from 'react';
import { string, object } from "prop-types";

import Rectangle from "../Rectangle/Rectangle";

import "./Circle.css";

class Circle extends Component {
	static propTypes = {
		style: string,
		text: string,
		children: object
	}

	render() {
		const { style, text, children } = this.props;

		return (
			<div style={style} className="circle">
				{children}
				<Rectangle text={text} />
			</div>
		);
	}
}

export default Circle;
