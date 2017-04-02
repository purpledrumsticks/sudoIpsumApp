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
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;
