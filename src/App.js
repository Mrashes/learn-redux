import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserList from './dev/containers/user-list';
import UserDetail from './dev/containers/user-detail';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Username List:</h2>
        <UserList />
        <hr/>
        <h2>User Details:</h2>
        <UserDetail/>
      </div>
    );
  }
}

export default App;
