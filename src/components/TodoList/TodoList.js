import React, { Component } from 'react';

import { array, func }  from "prop-types";

import "./TodoList.css"


class TodoList extends Component {

	static propTypes = {
		list: array,
		addElementToList: func
	}

	state = {
		inputText: ""
	}

	renderListItem = (item) => {
		const { text, id } = item;
		return <h1 key={id}>{ text }</h1>;
	}

	onSaveBtnClick = () => {
		this.props.addElementToList({
			id: Date.now(),
			text: this.state.inputText
		});

		this.setState({
			inputText: ""
		})
	}

	onInputChange = (event) => {
		this.setState({
			inputText: event.target.value
		})
	}

	render() {
		const { list } = this.props;

		const { inputText } = this.state;

		return (
			<div className={"todo-list-wrapper"}>
				<div>
					<input value={inputText} onChange={this.onInputChange} type="text"/>
					<button onClick={this.onSaveBtnClick}>Add Item</button>
				</div>
				{
					list.map(item => {
						return this.renderListItem(item)
					})
				}
			</div>
		);
	}
}

export default TodoList;
