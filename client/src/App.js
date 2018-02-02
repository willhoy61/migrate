import React, { Component } from 'react';

import FacebookLoginButton from './FacebookLoginButton';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Signup";
import Signin from "./pages/signin";
import axios from "axios";


class App extends Component {

  componentDidMount() {
    axios.get("/api/test").then(
      res => console.log(res)
      );
  }
  render() {
    return (
        <Router>
        <div>
          <Switch>
            <Route exact path ="signin" component = {signin}/>
            <Route exact path ="signup" component = {signup}/>
            <Route exact path ="home" component = {home}/>
            <Route component ={NoMatch}/>
          </Switch>
        </div>
        </Router>
      );
  }
}