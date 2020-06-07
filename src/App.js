import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  state = {
    ninjas: [
      { name: 'Abi', age: 19, place: 'MDU', id: 1 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja] //Spread Operator
    this.setState({
      ninjas: ninjas
    })
  }
  render() {

    return (
      <div className="App" >
        <h1> Hey There! This is a sample app </h1>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
