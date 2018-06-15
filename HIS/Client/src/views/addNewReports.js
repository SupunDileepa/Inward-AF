import React, { Component } from 'react';
import {Redirect} from 'react-router';

class AddNewReport extends Component {

	constructor(){

		super();

		this.state={
			 file: '',
      imagePreviewUrl: ''
      		}
		this.pres=this.pres.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
	}

	pres(){



const newReport={
      pId:"1",
      bedid:"123",
			testName:this.refs.name.value,
			tester:this.refs.tester.value,
			testResult:this.refs.result.value,
      image:this.state.imagePreviewUrl
		}
		//Empty feild validation

    console.log(newReport);

		 if(!this.refs.name.value || !this.refs.tester.value || !this.refs.result.value){
                alert('Please fill all fields');
                return;
            }    

			
	      fetch('http://localhost:5000/api/labtests',{
          method:'POST',
          headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type': 'application/json'

          },
            body: JSON.stringify(newReport)

        })
          .then((res)=>res.json())
            .then(alert("New Report Added Sucessfully"))

		}

	  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }


    reader.readAsDataURL(file)
  }

  render() {

    return (

      <div className="labtest">
      <h2>Enter New Lab Test Details Below To Add New Test Results</h2>
      <br/>
      <br/>
       <from>
       <div className="col-md-4 m-auto">
         <label for="validationDefault01">
         Test Name
         </label>
         <input type="text" className="form-control" id="validationDefault01" placeholder="Test Name" ref='name' required/>
         </div>
         <br/>
         <br/>
         <div className="col-md-4 m-auto">
         <label for="validationDefault01">
          Tester 
         </label>
         <input type="text" className="form-control" id="validationDefault01" placeholder="Tester Name" ref='tester' required/>
         </div>
         <br/>
         <br/>
         <div className="col-md-4 m-auto">
         <label for="validationDefault01">
         Test Result
         </label>
         <input type="text" className="form-control" id="validationDefault01" placeholder="Test Result" ref='result' required/>
         </div>
         <br/>
         <br/>
          <div className="custom-file">
          <input className="custom-file-input" type="file" id="customFile" onChange={this._handleImageChange} />
          <label className="custom-file-label" for="customFile">Choose file</label>
          </div>
         <br/>
         <br/>
         <div className="col-md-4 m-auto">
         <button className='btn btn-primary 'type="submit" onClick={this.pres}>Add Test</button>
         </div>
       </from>
      </div>
    );
  }
}

export default AddNewReport;