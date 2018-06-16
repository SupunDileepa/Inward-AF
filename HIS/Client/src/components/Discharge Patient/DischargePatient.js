import React, { Component } from "react";
import DetailBar from "./../../views/details";
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
import axios from "axios/index";

class DischargePatient extends Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
     
      patient : JSON.parse(localStorage.getItem('patientDetails')),
      patient_id: "",
      patient_name:"",
            bht_no:"",
            dischargedDate:"",
            
    };
      console.log(this.state.patient_id);
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
        bht_no:this.state.patient.bht
      })
    const {
        patient_id,
        patient_name,
              bht_no,
              dischargedDate
    } = this.state;

    axios
      .post("http://localhost:5000/api/discharge/add", {
        patient_id,
        patient_name,
              bht_no,
              dischargedDate
      })
      .then(result => {
        alertify.notify('Successfully Transfered!', 'success', 5, function(){  console.log('dismissed'); });
      });
    this.props.history.push("/bht/viewdischarge");
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
                <strong>Patient discharge</strong>
              </CardHeader>
              <Form onSubmit={this.submitHandler}>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="toward">BHT number</Label>
                    <Input
                      type="text"
                      id="transfer_ward"
                      name="transfer_ward"
                      value={this.state.patient.bht}
                      
                      placeholder=""
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="repSpExm">Patient ID
                    </Label>
                    <Input
                      type="text"
                      id="report_of_spacial_examination"
                      name="report_of_special_examination"
                      value={this.state.patient.pid}
                      
                      placeholder=""
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="reason">Patient Name</Label>
                    <Input
                      type="text"
                      id="reson_for_trasnsfer"
                      name="reason_for_transfer"
                      value={this.state.patient.name}
                      
                      
                      placeholder=""
                      required
                    />
                    </FormGroup>
                 <FormGroup>
                    <Label htmlFor="trDate">Transfer Date Time</Label>
                    <Input
                      type="date"
                      id="dischargedDate"
                      name="dischargedDate"
                      value={this.state.dischargedDate}
                      onChange={this.inputHandler}
                      placeholder=""
                      required
                    />
                  </FormGroup>
                  

                  <FormGroup className="form-actions">
                    <Button type="submit" size="sm" color="success">
                      Discharge Patient
                    </Button>
                  </FormGroup>
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DischargePatient;
