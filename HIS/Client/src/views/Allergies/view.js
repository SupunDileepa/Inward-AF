import React, {Component} from 'react';
import AllergyItem from "./allergyItem";
import DetailBar from "./../details";

class View extends Component {  

  constructor(props){
      super(props);
      this.state = {
        allergies : []
      }
  }

  // get allergies of the given bht and pid
  getAllergies(){
    fetch('http://localhost:5000/api/allergies/05/432')
    .then(response => response.json())
    .then(allergies=>this.setState({allergies}))      
  }

  componentDidMount(){
    this.getAllergies();
  }

  render() {
      var allergy =this.state.allergies.map((al,i)=>{            
        return(
            <AllergyItem key={i} item={al}/>
          )
      })

      return (
        <div className="animated fadeIn"> 
            <DetailBar/>
            <br/><br/>
            <table width="750">                  
                <th>Name</th>
                <th>Remark</th>
                <th>Category</th>
                <th>Severity</th>
                <th>Status</th>                
                {allergy}                
            </table>
        </div>
    )
  } 

}

export default View;
