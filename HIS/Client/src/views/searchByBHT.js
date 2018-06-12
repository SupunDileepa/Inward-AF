import React, {Component} from 'react';

class SearchByBHT extends Component {
  render() {
    return (
      <div className="animated fadeIn">        
        <input type="text" placeholder="Patient BHT ID"/>
        <button>Search</button>
      </div>
    )
  }
}

export default SearchByBHT;
