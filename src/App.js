import React, { Component } from 'react';
import './App.css';
const $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
    this.callSudoIpsum = this.callSudoIpsum.bind(this);
  }
  callSudoIpsum () {
    $.getJSON('https://sudo-ipsum.herokuapp.com/sudoIpsum', (response) => {
      this.setState({
        data: response.text
      })
    })
  }
  componentDidMount() {
    this.callSudoIpsum();
  }
  render() {
    return (
      <div className="App">
        <h1>HOLY MOLY LOOK AT THIS</h1>
        <p>{this.state.data}</p>
        <h1>WOWOWWWW ^^^^</h1>
      </div>
    );
  }
}

export default App;
