import React, { Component } from "react";
import axios from "axios";

import DetailBar from "./../../views/details";

import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input
} from "reactstrap";

class ExternalTransferForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient : JSON.parse(localStorage.getItem('patientDetails')),
      patient_id:"",
      patient_name:"",
      bht_no:"",
      transfer_from: "",
      transfer_to: "",
      reason_for_transfer: "",
      report_of_spacial_examination: "",
      treatment_suggested: "",
      transfer_created_date_time: "",
      name_of_guardian: "",
      address_of_guardian: "",
      remark: ""
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler(e) {
    e.preventDefault();
    this.setState({

      patient_id:this.state.patient.pid,
      bht_no:this.state.patient.bht,
      patient_name: this.state.patient.name
    })
    const {
      patient_id,
      patient_name,
      bht_no,
      transfer_from,
      transfer_to,
      reason_for_transfer,
      report_of_spacial_examination,
      treatment_suggested,
      transfer_created_date_time,
      name_of_guardian,
      address_of_guardian,
      remark
    } = this.state;

    axios
      .post("http://localhost:5000/api/externalTransfer/add", {
        patient_id,
        patient_name,
        bht_no,
        transfer_from,
        transfer_to,
        reason_for_transfer,
        report_of_spacial_examination,
        treatment_suggested,
        transfer_created_date_time,
        name_of_guardian,
        address_of_guardian,
        remark
      })
      .then(result => {
        alertify.notify('Successfully Tranfered', 'success', 5, function(){  console.log('dismissed'); });
      });
    this.props.history.push("/bht/viewexternalTransfer");
  }

  render() {
    return (

      
      <div className="animated fadeIn">
        <DetailBar/>
        <br/><br/>

        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>External Transfet</strong>
              {/*//  <small> Form</small>*/}
            </CardHeader>
            <Form onSubmit={this.submitHandler}>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="transfer_from">Transfer From Hospital</Label>
                  <Input
                    type="text"
                    id="transfer_from"
                    name="transfer_from"
                    value={this.state.transfer_from}
                    onChange={this.inputHandler}
                    placeholder=""
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="transfer_to">Transfer to hospital</Label>
                  <Input
                    type="text"
                    id="transfer_to"
                    name="transfer_to"
                    value={this.state.transfer_to}
                    onChange={this.inputHandler}
                    placeholder=""
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="reason_for_transfer">
                    Reason For Transfer
                  </Label>
                  <Input
                    type="text"
                    id="reason_for_transfer"
                    name="reason_for_transfer"
                    value={this.state.reason_for_transfer}
                    onChange={this.inputHandler}
                    placeholder=""
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="report_of_spacial_examination">
                    Report Of Spacial Examination
                  </Label>
                  <Input
                    type="text"
                    id="report_of_spacial_examination"
                    name="report_of_spacial_examination"
                    value={this.state.report_of_spacial_examination}
                    onChange={this.inputHandler}
                    placeholder=""
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="treatment_suggested">
                    treatment suggested{" "}
                  </Label>
                  <Input
                    type="text"
                    id="treatment_suggested"
                    name="treatment_suggested"
                    value={this.state.treatment_suggested}
                    onChange={this.inputHandler}
                    placeholder=""
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="transfer_created_date_time">
                    Transfer Date Time
                  </Label>
                  <Input
                    type="date"
                    id="transfer_created_date_time"
                    name="transfer_created_date_time"
                    value={this.state.transfer_created_date_time}
                    onChange={this.inputHandler}
                    placeholder=""
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="name_of_guardian">Name of the guardian</Label>
                  <Input
                    type="text"
                    id="name_of_guardian"
                    name="name_of_guardian"
                    value={this.state.name_of_guardian}
                    onChange={this.inputHandler}
                    placeholder=""
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="address_of_guardian">
                    Address of the guardian
                  </Label>
                  <Input
                    type="text"
                    id="address_of_guardian"
                    name="address_of_guardian"
                    value={this.state.address_of_guardian}
                    onChange={this.inputHandler}
                    placeholder=""
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="remark">Remark</Label>
                  <Input
                    type="text"
                    id="remark"
                    name="remark"
                    value={this.state.remark}
                    onChange={this.inputHandler}
                    placeholder=""
                    
                  />
                </FormGroup>
                <FormGroup className="form-actions">
                  <Button type="submit" size="sm" color="success">
                    Transfer Patient
                  </Button>
                </FormGroup>
              </CardBody>
            </Form>
          </Card>
        </Col>
      </div>
    );
  }
}

export default ExternalTransferForms;
