import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const cowsay = require('cowsay');
const faker = require('faker');

class Header extends Component {
  render(){
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Generate Cowsay Lorem</h1>
      </header>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      content: cowsay.say({text : "hello world"}),
    }
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent(){
    this.updateState(this.state.content = cowsay.say({text : faker.lorem.lines()}))
  }

  updateState(content){
    this.setState({content});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <pre className="App-content">{this.state.content}</pre>
        <button onClick={this.updateContent}>Click Me!</button>
      </div>
    );
  }
}

export default App;
