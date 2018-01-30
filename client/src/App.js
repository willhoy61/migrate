import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from "./components/Login";


const responseFacebook = (response) => {
  console.log(response);
}

class App extends Component {
  render() {
  	const responseFacebook = (response) => {
  	console.log(response);
  	this.signup(response, 'facebook');
	}
  }
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
      </div>
    );
  }
}

export default App;
