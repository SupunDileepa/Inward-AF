import React, {Component} from 'react';

class SearchByBHT extends Component {

  search(){
    alert("hi there")
  }

  render() {
    return (
      <div className="animated fadeIn">        
        <input type="text" placeholder="Patient BHT ID"/>
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}

export default SearchByBHT;
