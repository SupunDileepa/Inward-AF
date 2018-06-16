import React, { Component } from "react";
import { Link } from "react-router-dom";
import DietItem from "./dietitems";
import DetailBar from "./details";


class Viewdiet extends Component {
  constructor() {
    super();

    this.state={
    	
      patient : JSON.parse(localStorage.getItem('patientDetails')),
      dietItems:[]

      }
    }
    


  

  componentWillMount() {
    // fetch(`http://localhost:5000/api/labtests/${this.state.user.pid}/${this.state.user.bht}`)
    fetch(`http://localhost:5000/api/diets/${this.state.patient.pid}`)
      .then(res => res.json())
      .then(dietItems =>
        this.setState({ dietItems }, () => console.log(dietItems))
      );
  }



  render(){




//Mapping lab test items 

  

      var diet =this.state.labTestItems.map((dietitem,i)=>{
            
      return(
          <DietItem key={i} item={dietitem}/>
        )
              
     })

  

    


  	return(

  			<div className='main_DietReportView'>
  			 
          <DetailBar/>
  		

                 <br/>
                 <br/>
                 <br/>
                    <h3>patient Diet Reports</h3>
                 <br/>
                 <br/>
                 <br/>

                   <table className="table table-hover">

                      

                        <thead>
                        <th>Food Group</th>
                        <th>Serving Size</th>
                        <th>Calories</th>
                        <th>Energy</th>             
                        </thead>
                        <tbody>

                    {diet}

                         </tbody>
                    </table> 

                 <br/>
                 <br/>
                 <br/>


                 </div>
  				
		

  					


  			
		
			
  		);
     }

}

export default Viewdiet;
