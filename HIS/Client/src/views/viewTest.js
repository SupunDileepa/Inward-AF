import React, { Component } from "react";
import { Link } from "react-router-dom";
import LabItem from "./labItems";
import DetailBar from "./details";

class Viewtest extends Component {
  constructor() {
    super();


    	user:JSON.parse(localStorage.getItem('session')),
      labTestItems:[]
      
    }
    console.log("lol this.state.name");


  }

  componentWillMount() {
    // fetch(`http://localhost:5000/api/labtests/${this.state.user.pid}/${this.state.user.bht}`)
    fetch("http://localhost:5000/api/labtests/1/123")
      .then(res => res.json())
      .then(labTestItems =>
        this.setState({ labTestItems }, () => console.log(labTestItems))
      );
  }



  render(){




//Mapping lab test items 

  

      var labReports =this.state.labTestItems.map((labItems,i)=>{
            
      return(
          <LabItem key={i} item={labItems}/>
        )
              
     })

  

    


  	return(

  			<div className='main_labReportView'>
  			 
          <DetailBar/>
  		

                 <br/>
                 <br/>
                 <br/>
                    <h3>Lab Reports</h3>
                 <br/>
                 <br/>
                 <br/>

                   <table className="table table-hover">

                      

                        <thead>
                        <th>Test Name</th>
                        <th>Test Result</th>
                        <th>Tester</th>
                        <th>View Report</th>             
                        </thead>
                        <tbody>

                    {labReports}

                         </tbody>
                    </table> 
                    


                 </div>
  				
		

  					


  			
		
			
  		);
     }

}

export default Viewtest;
