import React, {Component} from 'react';

class SearchByBHT extends Component {

  constructor(props){
    super(props);
    this.state = {
      pid : "",
      bht : "",
      name : "",
      wardNo : "",
      bedNo : ""
    }
  }

  search(){
    // check whether the field is empty
    if(!this.refs.bht.value) return;    

    fetch('http://localhost:5000/api/patients/' + this.refs.bht.value)
    .then(response => response.json())
    .then((json) => {
      if(json.length == 0){
        alert('No patients found with the given BHT number');
        return;
      }
      this.setState({
        pid : json[0].pId,
        bht : json[0].bht,
        name : json[0].name,
        wardNo : json[0].wardNo,
        bedNo : json[0].bedNo,
      }) 

      document.getElementById("pid").innerHTML = this.state.pid;
      document.getElementById("bht").innerHTML = this.state.bht;
      document.getElementById("name").innerHTML = this.state.name;
      document.getElementById("wardNo").innerHTML = this.state.wardNo;
      document.getElementById("bedNo").innerHTML = this.state.bedNo;
    })  
  }     

  render() {
    return (
      <div className="animated fadeIn"> 
        <form>
          <input type="number" ref="bht" placeholder="Patient BHT ID" required/>
          <input type="submit" onClick={this.search.bind(this)} Search/>
        </form>
        <br/><br/>
        Patient ID : <label id="pid"></label><br/>
        BHT Number : <label id="bht"></label><br/>
        Name : <label id="name"></label><br/>
        Ward Number : <label id="wardNo"></label><br/>
        Bed Number : <label id="bedNo"></label>

      </div>
    )
  }
}

export default SearchByBHT;
