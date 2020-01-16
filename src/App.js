import React, { Component } from 'react';
import { List } from './components/List.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
        fetch('http://localhost:3001/power-plants')
        .then(res => res.json())
        .then((data) => {
          this.setState({ list: data })
        })
        .catch(console.log)
      }

  render() {
    return (
      <div className="container">
          <List items={this.state.list} />
        <hr />
      </div>
    );
  }
}

export default App;