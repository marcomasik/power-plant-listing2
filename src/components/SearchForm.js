import React, { Component } from 'react'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      powerPlantTypeFilter: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      powerPlantTypeFilter: e.target.value
    })
    this.props.onChange(e.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Poet: </label>
        <input type="text" id="filter" 
          value={this.state.powerPlantTypeFilter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default SearchForm