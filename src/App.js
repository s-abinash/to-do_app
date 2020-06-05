import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component {

  state = {
    ninjas: [
      { name: 'Abi', age: 19, place: 'MDU', id: 1 },
      { name: 'Joshi', age: 22, place: 'LA', id: 2 },
      { name: 'Arul', age: 19, place: 'NMKL', id: 3 },
      { name: 'Aadvik', age: 21, place: 'MAS', id: 4 }
    ]
  }
  render() {

    return (
      <div className="App" >
        <h1> Hey There! This is a sample app </h1>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
