import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     <div onClick={this.props.clickEvent}> This div has been clicked {this.props.clickCounter} times</div>
    );
  }
}

export default App;
