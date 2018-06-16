import React, {Component} from 'react';
import DetailBar from "./../details";
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";

class View extends Component {  

  constructor(props){
    super(props);
    this.state = {
      name : "",
      remark : "",
      category : "",
      severity : "",
      status : "",
      patient : JSON.parse(localStorage.getItem('patientDetails')) 
    }
  }

  sendAllergy(){
    console.log(this.refs.name.value)
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
            "pid" : this.state.patient.pid,
            "bht" : this.state.patient.bht,
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
        <DetailBar/>
        <br/><br/>


        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Add New Allergy</strong>
              </CardHeader>
              <Form>
                <CardBody>
                 
                  <FormGroup>
                    <Label>Allergy Name</Label>
                    <Input ref="name" type="text" placeholder="Allergy Name" required/>
                  </FormGroup>

                  <FormGroup>
                    <Label>Remark</Label>
                    <Input ref="remark" type="text" placeholder="Remark" required/>
                  </FormGroup>

                  <FormGroup>
                  <Label>Category</Label>
                  <Input type="select" name="select" id="category">
                    <option>Animal Allergy</option>
                    <option>Drug Allergy</option>
                    <option>Environmental Allergy</option>
                    <option>Food Allergy</option>
                    <option>Pollen Allergy</option>
                    <option>Miscellaneous Allergy</option>
                    <option>Miscellaneous Contra Indication</option>
                    <option>Plant Allergy</option>
                  </Input>                  
                  </FormGroup>

                  <FormGroup>
                  <Label>Severity</Label>
                  <Input type="select" name="select" id="severity">                  
                    <option>Mild</option>
                    <option>Moderate</option>
                    <option>Severe</option>
                    <option>Unknown</option>  
                  </Input>                  
                  </FormGroup>

                  <FormGroup>
                    <Label>Status</Label>

                    <FormGroup check>
                      <Label check>
                        <Input type="radio" id="r1" name="radio1" checked/>{' '}
                        Current
                      </Label>
                    </FormGroup>

                    <FormGroup check>
                      <Label check>
                        <Input type="radio" id="r2" name="radio1" />{' '}
                        Past
                      </Label>
                    </FormGroup>
                  </FormGroup>

                  <FormGroup>
                    <Button onClick={this.sendAllergy.bind(this)} size="sm" color="success">
                      Insert Allergy
                    </Button>
                  </FormGroup>
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>

        {/* <h3>Add New Allergy</h3><br/>
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
        </form> */}
      </div>
    )
  }
}

export default View;
