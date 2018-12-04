import React, { Component } from 'react';

import YouTube from "react-youtube";

import { string, bool } from "prop-types";

const opts = {
	playerVars: { // https://developers.google.com/youtube/player_parameters
		autoplay: 1
	}
};

class Input extends Component {
	constructor(props) {
		super(props);

		this._inputRef = React.createRef();
		this._inputRef2 = React.createRef();

		this._videoWidth = React.createRef();
	}

	state = {
		videoWidth: 0,
	}

	componentDidMount() {
		this.setState({
			videoWidth: this._videoWidth.current.clientWidth - 400
		})

		// console.dir("this._inputRef", this._inputRef.current);
		// this._inputRef2.current.focus();
	}

	onInputChange = () => {
		this._inputRef2.current.value = this._inputRef.current.value
	}

	onReady(event) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}

	render() {
		const { videoWidth } = this.state;

		const playerWidth = videoWidth;
		const playerHeight = playerWidth / 1.64;

		return(
			<div ref={this._videoWidth}>
				{/*<input ref={this._inputRef} onChange={this.onInputChange} type="text"/>*/}
				{/*<input ref={this._inputRef2} type="text"/>*/}

				<YouTube
					videoId="0I647GU3Jsc"
					opts={{
						width: playerWidth,
						height: playerHeight
					}}
					onReady={this.onReady}
				/>
			</div>
		)
	}
}

export default Input;
