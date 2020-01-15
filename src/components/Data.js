import React, { Component } from 'react';

import SearchForm from './components/SearchForm.js'
import Contacts from './components/contacts'

class Data extends Component {

  constructor(props) {
    super(props)
    this.state = {
      elet: []
    }
  }

  componentDidMount() {
        fetch('http://localhost:3001/power-plants')
        .then(res => res.json())
        .then((data) => {
          this.setState({ elet: data })
        })
        .catch(console.log)
      }
}

export { Data };
