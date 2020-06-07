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
        <center><h1 className="ui header"> To DO App! Using Semantic </h1></center><br />
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
