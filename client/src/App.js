import React, { Component } from 'react';
import './App.css';
import FacebookLoginButton from './FacebookLoginButton';
import axios from 'axios';

class App extends Component {

  state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

  render() {
    const { username } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Social Media Login</h1>
        </header>

        <div className="App-intro">
          { !username &&
            <div>
              <p>Click on one of any button below to login</p>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button>Facebook</button>
              </FacebookLoginButton>
            </div>
          }
          {username &&
            <p>Welcome back, {username}</p>
          }
        </div>
      </div>
    );
  }
}

export default App;