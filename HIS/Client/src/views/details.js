
import React, {Component} from 'react';

class DetailBar extends Component {

	constructor(){
		super()
		this.state ={
			patient : JSON.parse(localStorage.getItem('patientDetails'))
			
		}
		console.log(this.state.patient)		
	}

componentDidMount(){
	
	
}

  render() {
    return (

				
				<div className="btn btn-primary btn-block" >
				    <div className="panel-heading" >

				        <h4>
				            <b>
				                
				                PID : {this.state.patient.pid}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								BHT : {this.state.patient.bht}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								Name : {this.state.patient.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								Ward No : {this.state.patient.wardNo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								Bed No : {this.state.patient.bedNo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


				                

				            </b>
				        </h4>       
				    </div>
				    </div>   
     )
  }
}

export default DetailBar;