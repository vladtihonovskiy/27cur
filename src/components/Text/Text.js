import React, { Component } from 'react';

import { string, bool } from "prop-types";

class Text extends Component {

	static propTypes = {
		text: string,
		check: bool
	}

	static defaultProps = {
		text: "Привет"
	}

	componentDidMount() {
		console.log("Text Did mount");
	}

	componentDidUpdate(prevProps) {
		console.log("prevProps", prevProps);
		console.log("this.props", this.props);
	}

	componentWillUnmount() {
		console.log('Component WILL UNMOUNT!')
	}

	render() {
		const { text } = this.props;

		return(
			<p>{ text }</p>
		)
	}
}

export default Text;
