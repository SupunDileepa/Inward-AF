import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, {Component, PropTypes} from 'react';
import View from '../../views/Allergies/view';
import Viewtest from './../viewTest';

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



export default class Export extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      pid : "",
      bht : "",
      name : "",
      wardNo : "",
      bedNo : ""
    }
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input,{
      onrendered:function(canvas){
          var pdf=new jsPDF("p", "mm", "a4");
          var width = pdf.internal.pageSize.width;    
          var height = pdf.internal.pageSize.height;
          pdf.addImage(canvas, 'JPEG', 0, 0,width,height);
          pdf.save('test11.pdf');
      }
  })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  // get bht number
  // send that to local, so when rendering tests, prescription, allergies, they will render the correct bht's details

  getBHT(){
    
    var inBht = document.getElementById('bht').value;
    if(!inBht) return;

    fetch("http://localhost:5000/api/patients/bht/" + inBht)
      .then(response => response.json())
      .then(json => {
        if (json.length == 0) {
          alert("No patients found with the given BHT number");
          return;
        }
        this.setState({
          pid: json[0].pId,
          bht: json[0].bht,
          name: json[0].name,
          wardNo: json[0].wardNo,
          bedNo: json[0].bedNo
        }, () => {
          this.sendToLocal();
        });
        
      });    
    
  }

  sendToLocal() {
    
    localStorage.clear();
    
    const patient = {
      pid: this.state.pid,
      bht: this.state.bht,
      name: this.state.name,
      wardNo : this.state.wardNo,
      bedNo : this.state.bedNo
    };

    localStorage.setItem("patientDetails", JSON.stringify(patient));
  }
  

  render() {
    return (
      <div>
      <Row>
          <Col xs="12" sm="6">
            <Card>
              
              <Form>
                <CardBody>
                 
                  <FormGroup>
                    <Input id="bht" type="text" placeholder="Patient BHT" required/> 
                  </FormGroup>

                  <FormGroup>
                    <Button type="submit" onClick={this.getBHT.bind(this)}  color="success">Search</Button>&nbsp;&nbsp;&nbsp;
                    <Button type="submit" onClick={this.printDocument.bind(this)}  color="danger">Download</Button>
                  </FormGroup>

                
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>
        <div id="divToPrint">
        <div><View/></div><br/><br/>
        <div><Viewtest/></div>
        </div>
        
        {/* <div><View/></div> */}
        </div>
      
      // <div>
      //   <div className="mb5">
      //     <button className="btn btn-primary" onClick={this.printDocument}>Get Report</button>
      //   </div>   
      //   <h3>Click To Download Full Report Table</h3>
      //   <div id="divToPrint" ><View/></div>
      // </div>
    );
  }
}