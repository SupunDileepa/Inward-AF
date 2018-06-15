import React, { Component } from "react";

class SearchByBHT extends Component {
<<<<<<< HEAD
  constructor(props) {
=======

  constructor(props){
>>>>>>> ce5d3aef1313ef7a92353148ec65ba28a4a7bc5f
    super(props);
    this.state = {
      pid: "",
      bht: "",
      name: "",
      wardNo: "",
      bedNo: ""
    };
  }

  search() {
    // check whether the field is empty
    if (!this.refs.bht.value) return;

<<<<<<< HEAD
    fetch("http://localhost:5000/api/patients/" + this.refs.bht.value)
      .then(response => response.json())
      .then(json => {
        if (json.length == 0) {
          alert("No patients found with the given BHT number");
          return;
        }
        this.setState({
          pid: json[0].pId,
          bht: json[0].bht,
          name: json[0].name,
          wardNo: json[0].wardNo,
          bedNo: json[0].bedNo
        });
=======
    fetch('http://localhost:5000/api/patients/bht/' + this.refs.bht.value)
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
>>>>>>> ce5d3aef1313ef7a92353148ec65ba28a4a7bc5f

        document.getElementById("pid").innerHTML = this.state.pid;
        document.getElementById("bht").innerHTML = this.state.bht;
        document.getElementById("name").innerHTML = this.state.name;
        document.getElementById("wardNo").innerHTML = this.state.wardNo;
        document.getElementById("bedNo").innerHTML = this.state.bedNo;
      });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <form>
          <input
            type="number"
            ref="bht"
            placeholder="Patient BHT ID"
            required
          />
          <input type="submit" onClick={this.search.bind(this)} Search />
        </form>
<<<<<<< HEAD
        <br />
        <br />
        Patient ID : <label id="pid" />
        <br />
        BHT Number : <label id="bht" />
        <br />
        Name : <label id="name" />
        <br />
        Ward Number : <label id="wardNo" />
        <br />
        Bed Number : <label id="bedNo" />
=======
        <br/><br/>
        Patient ID : <label id="pid"></label><br/>
        BHT Number : <label id="bht"></label><br/>
        Name : <label id="name"></label><br/>
        Ward Number : <label id="wardNo"></label><br/>
        Bed Number : <label id="bedNo"></label>

>>>>>>> ce5d3aef1313ef7a92353148ec65ba28a4a7bc5f
      </div>
    );
  }
}

export default SearchByBHT;
