import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const cowsay = require('cowsay');

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      content: cowsay.say({text : "hello world"}),
    }
  render() {
    return (
      <div className="App">
        <button onClick={this.updateContent}>Click Me!</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

export default App;
