import React, { Component } from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

    componentDidMount() {
        
      }


  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }
    
    handleChange(e) {
        // Variable to hold the original version of the list
    let currentList = [];

        // Variable to hold the filtered list before putting into state
    let newList = [];
        
        // If the search bar isn't empty
    if (e.target.value !== "") {
            // Assign the original list to currentList
      currentList = this.props.items;
            
            // Use .filter() to determine which items should be displayed
            // based on the search terms
      newList = currentList.filter(item => {

                // change current item to lowercase
        const lc = item.type.toLowerCase();
                // change search term to lowercase
        const filter = e.target.value.toLowerCase();

                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }

        // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }
    
    render() {
        return (
            <div>
                <h3>Power plants</h3>
                <div className="text--welcome">Filter power plants by type: wind, biomass, hydro</div>
                <div className="container--search-field">
                    <input type="text" className="search-field" onChange={this.handleChange} placeholder="Search..." />
                </div>
                <ul>
                    {this.state.filtered.map(item => (
                        <li key={item}>
                            <div className="bundesnetzagentur-number title row"> Bundesnetzagentur Number: {item.bundesnetzagentur_number}</div>
                            <div className="company row">Company: {item.comapny_name}</div>      
                            <div className="type row"> Type: {item.type}</div>                        
                            <div className="state row"> State: {item.state}</div>
                            <div className="production-value-kw row"> Production Value (kW): {item.net_nominal_power_mw}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export { List };