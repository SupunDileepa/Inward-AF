import React, { Component } from 'react';
import {Redirect} from 'react-router';
import DetailBar from "./../details";


class PrescribeDrug extends Component {

	constructor(){

		super();

		this.state={

      patient : JSON.parse(localStorage.getItem('patientDetails'))
			
		}
		this.pres=this.pres.bind(this)
	}

	pres(){



const newDrug={
      pId:this.state.patient.pid,
      bht:this.state.patient.bht,
			drugName:this.refs.name.value,
			dose:this.refs.dosage.value,
			frequency:this.refs.frequancy.value,
			prescriber:this.refs.prescriber.value,
      duration:this.refs.duration.value
		}
		//Empty feild validation
		 if(!this.refs.name.value || !this.refs.dosage.value || !this.refs.frequancy.value|| !this.refs.prescriber.value||!this.refs.duration.value){
                alert('Please fill all fields');
                return;
            }    

			//console.log(this.refs.pass.value)
			fetch('http://localhost:5000/api/prescriptions',{
					method:'POST',
					headers:{
						'Accept':'application/json,text/plain,*/*',
						'Content-Type': 'application/json'

					},
						body: JSON.stringify(newDrug)

				})
					.then((res)=>res.json())
					  .then(alert("Drug Prescribed sucessfully"))

		}

	

  render() {

    return (

      <div className="prescribe">
      <DetailBar/>
          <br/><br/>
      <h2>Enter Prescription Details Below To Prescribe A Drug</h2>
      <br/>
      <br/>
       <from>
       
       <div className="col-md-4 m-auto">
         <label for="validationDefault01">
         Drug name
         </label>
         <input type="text" className="form-control" id="validationDefault01" placeholder="Drug Name" ref='name' required/>
         </div>
         <br/>
         <br/>
         
         <div className="col-md-4 m-auto">
         <label for="validationDefault02">
         Duration
         </label>
         <input type="text" className="form-control" id="validationDefault02" placeholder="Duration" ref='duration' required/>
         </div>
         <br/>
         <br/>

           <div className="col-md-4 m-auto">
         <label for="validationDefault03">
         Dosage
         </label>
         <input type="number" className="form-control" id="validationDefault03" placeholder="Dosage" ref='dosage' required/>
         </div>

         <br/>
         <br/>
        <div className="col-md-4 m-auto">
         <label for="validationDefault04">
         Frequancy
         </label>
         <input type="text" className="form-control" id="validationDefault04" placeholder="Frequancy" ref='frequancy' required/>
         </div>
    
         <br/>
         <br/>
         <div className="col-md-4 m-auto">
         <label for="validationDefault04">
         Prescriber
         </label>
         <input type="text" className="form-control" id="validationDefault04" placeholder="Prescriber" ref='prescriber' required/>
         </div>
     
         <br/>
         <br/>
         <div className="col-md-4 m-auto">
         <button className='btn btn-primary 'type="submit" onClick={this.pres}>Prescribe</button>
         </div>
       </from>
      </div>
    );
  }
}

export default PrescribeDrug;