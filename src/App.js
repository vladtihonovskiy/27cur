import React, { Component } from 'react';

import Text from "./components/Text/Text";
import Input from "./components/Input/Input";

import './App.css';

class App extends Component {
	state = {
		loader: true,
		text: "Привет",
		textVisibility: true
	}

	componentDidMount() {
		console.log("App Did mount");
		setTimeout(()=> {
			this.setState({
				loader: false
			});
		}, 3000);
	}

	componentDidUpdate(){
		console.log("App update");
	}

	onButtonClick = () => {
		this.setState({
			text: "Пока",
			textVisibility: true
		})
	}

	onDeleteButtonClick = () => {
		this.setState({
			testVisibility: false
		});
	}

	// renderText() {
	// 	const { loader, text, textVisibility } = this.state;
	//
	// 	if (textVisibility) {
	// 		return (
	// 			<Text text={text}/>
	// 		)
	// 	}
	// }

	render() {
		const { loader, text, textVisibility } = this.state;

			return (
				<div>
					{ loader ?
						<div className="App">
							<h1>ЗАГРУЗКА</h1>
						</div>
						:
						<div className="App">
							<h1>Загрузился</h1>

							<Input />

							<button onClick={this.onButtonClick}>Добавить значение</button>
							<button onClick={this.onDeleteButtonClick}>Удалить текск</button>
							{/*{ this.renderText() }*/}

							{ textVisibility && <Text text={text} /> }
						</div>
					}
				</div>
			);
	}
}

export default App;
