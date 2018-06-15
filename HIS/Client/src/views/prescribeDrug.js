import React, { Component } from 'react';
import {Redirect} from 'react-router';

class PrescribeDrug extends Component {

	constructor(){

		super();

		this.state={
			
		}
		this.pres=this.pres.bind(this)
	}

	pres(){



const newDrug={
      pId:"1",
      bht:"123",
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
         <div className="col-md-4 mb-3">
         <label for="validationDefault02">
         Duration
         </label>
         <input type="text" className="form-control" id="validationDefault02" placeholder="Duration" ref='duration' required/>
         </div>
         <br/>
         <br/>
         <label>
         Dosage:   
         <input type="text" name="Dosage" ref='dosage'/>
         </label>
         <br/>
         <br/>
         <label>
         Frequancy:
         <input type="text" name="frequancy" ref='frequancy'/>
         </label>
         <br/>
         <br/>
          <label>
         Prescriber:   
         <input type="text" name="prescriber" ref='prescriber'/>
         </label>
         <br/>
         <br/>
         <div className="custom-file">
  <input type="file" className="custom-file-input" id="customFile"/>
  <label className="custom-file-label" for="customFile">Choose file</label>
</div>
         <button className='btn btn-primary 'type="submit" onClick={this.pres}>Prescribe</button>
       
       </from>
      </div>
    );
  }
}

export default PrescribeDrug;