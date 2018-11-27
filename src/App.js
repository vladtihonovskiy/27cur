import React, { Component } from 'react';

import Circle from "./components/Circle/Circle";
import Rectangle from "./components/Rectangle/Rectangle";

import './App.css';

class People {
	static handleName = () => {
	  console.log("Vlad");
    }
}

class App extends Component {
  // state = {
  //   button: false
  // }

  onButtonClick = () => {
	  alert("Нажал успешно")
  }

  render() {
    const circleStyle = {
		backgroundColor: "yellow",
		width: "500px",
        height: "400px"
    }

    const circleStyle2 = {
        backgroundColor: "red",
        width: "100px",
        height: "100px"
    }

   // People.handleName();

    return (
      <div className="App">
        <button onClick={this.onButtonClick}>Click</button>
        {/*<h1>Привет</h1>*/}

          <Circle style={circleStyle} text={"Привет"} >
			  <Circle style={circleStyle2} text={"Children"} />
          </Circle>
      </div>
    );
  }
}

export default App;
