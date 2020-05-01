import React, { Component } from 'react';
import AppNavBar from '../components/appNavBar'
import ListEmployees from '../components/listEmployees';

class Home extends Component {
  render() {
    return (
      <div>
      <AppNavBar />
      <ListEmployees />
      </div>
    );
  }
}
export default Home;