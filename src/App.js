import React, { Component } from 'react';
import { List } from './components/List.js';

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
      <div className="content">
        <div className="container">
          <section className="section">
                        <List items={this.state.list} />
          </section>
          <hr />
          <section className="section">
            <form className="form" id="addItemForm">
              <input
                type="text"
                className="input"
                id="addInput"
                placeholder="Something that needs ot be done..."
              />
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default App;