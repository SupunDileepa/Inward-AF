import React, {Component} from 'react';
import DetailBar from "./../details";

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


  updateAllergy(){

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
      fetch('http://localhost:5000/api/allergies/' + this.props.match.params.pid + '/' + this.props.match.params.bht + '/' + this.props.match.params.aid, {
        method: 'put',
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

        alert('Allergy Updated !')
       
    });    
    
  }
 
  componentDidMount(){
    var nameUrl = this.props.match.params.name.replace(/_/g, " ");
    var remarkUrl = this.props.match.params.remark.replace(/_/g, " ");
    var categoryUrl = this.props.match.params.category.replace(/_/g, " ");
    var severityUrl = this.props.match.params.severity.replace(/_/g, " ");
    var statusUrl = this.props.match.params.status.replace(/_/g, " ");

    this.refs.name.value = nameUrl;
    this.refs.remark.value = remarkUrl;
    document.getElementById("category").value = categoryUrl;
    document.getElementById("severity").value = severityUrl;
    if(statusUrl == "Current"){
      document.getElementById("r1").checked = true;
    }
    else{
      document.getElementById("r2").checked = true;
    }
  }

  render() {
    return (
      <div className="animated fadeIn"> 
        <DetailBar/>
        <br/><br/>
        <h3>Update Allergy</h3><br/>
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
          
          <button onClick={this.updateAllergy.bind(this)} className="btn btn-sm btn-primary"> Update Allergy </button>
        </form>
      </div>
    )
  }
}

export default View;
