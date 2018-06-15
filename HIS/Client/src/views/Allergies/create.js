import React, {Component} from 'react';

class View extends Component {  

  constructor(props){
    super(props);
    this.state = {
      name : "",
      remark : "",
      category : "",
      severity : "",
      status : ""
    }
  }

  sendAllergy(){

    // check for empty fields
    if(!this.refs.name.value || !this.refs.remark.value) return;

    var radio = "";
    if(document.getElementById("r1").checked){
      radio = document.getElementById("r1").value;
    }
    else{
      radio = document.getElementById("r2").value;
    }
    
    this.setState({
      name : this.refs.name.value,
      remark : this.refs.remark.value,
      category : document.getElementById("category").value,
      severity : document.getElementById("severity").value,
      status : radio
    }, () => {     

      // create a new allergy for the patient
      fetch('http://localhost:5000/api/allergies/', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "pid" : "05",
            "bht" : "432",
            "name" : this.state.name ,
            "remark" : this.state.remark ,
            "category" : this.state.category , 
            "severity" : this.state.severity,
            "status" : this.state.status 
        })
        }).then(res=>res.json())
        .then(res => console.log(res));

        alert('Allergy Added !')
        
    });    
    
  }

  render() {
    return (
      <div className="animated fadeIn"> 
        <h3>Add New Allergy</h3><br/>
        <form>
          <input ref="name" type="text" placeholder="Allergy Name" required/><br/><br/>
          <input ref="remark" type="text" placeholder="Remark" required/><br/><br/>

          <select id="category">
            <option>Animal Allergy</option>
            <option>Drug Allergy</option>
            <option>Environmental Allergy</option>
            <option>Food Allergy</option>
            <option>Pollen Allergy</option>
            <option>Miscellaneous Allergy</option>
            <option>Miscellaneous Contra Indication</option>
            <option>Plant Allergy</option>      
          </select><br/><br/>
          
          <select id="severity">
            <option>Mild</option>
            <option>Moderate</option>
            <option>Severe</option>
            <option>Unknown</option>               
          </select><br/><br/>

          Current&nbsp;&nbsp;<input type="radio" value="Current" name="choose" id="r1" checked/><br/>
          Past&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="Past" name="choose" id="r2"/>
          <br/><br/>
          
          <button onClick={this.sendAllergy.bind(this)} className="btn btn-sm btn-primary"> Insert Allergy </button>
        </form>
      </div>
    )
  }
}

export default View;
