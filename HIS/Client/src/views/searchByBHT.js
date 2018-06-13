import React, {Component} from 'react';

class SearchByBHT extends Component {

  search(){
    // check whether the field is empty
    if(!this.refs.bht.value) return;    

    fetch('http://localhost:5000/api/patients/' + this.refs.bht.value)
    .then((response) => {
      // check whether the response is empty
      if(response.headers.get("Content-Length") == 2) {
        alert("No patient found with the given BHT number");
        return;
      }
      else{
        console.log(response.json());
      }
    })
  }  

  render() {
    return (
      <div className="animated fadeIn"> 
      <form>
        <input type="number" ref="bht" placeholder="Patient BHT ID" required/>
        <input type="submit" onClick={this.search.bind(this)} Search/>
      </form>
      </div>
    )
  }
}

export default SearchByBHT;
