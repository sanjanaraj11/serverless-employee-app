import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/home';
import Amplify from 'aws-amplify';
import aws_config from "./aws-exports";

Amplify.configure(aws_config);

class App extends Component {
  render() {
    return (
      //<img src={logo} className="App-logo" alt="logo" />
      <Home />
    );
  }
}
export default App;
