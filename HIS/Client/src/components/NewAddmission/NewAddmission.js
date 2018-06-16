import React, { Component } from "react";
import axios from "axios";
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
class NewAddmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bht: "",
      wardNo: "",
      bedNo: "",
      name: "",
      yearlyNo: "",
      monthlyNo: "",
      docName: "",
      dailyNo: "",
      patientComplain: "",
      patientPreviousHistory: "",
      gender: "",
      dob: ""
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler(e) {
    e.preventDefault();
    const {
      bht,
      name,
      wardNo,
      bedNo,
      yearlyNo,
      monthlyNo,
      docName,
      dailyNo,
      patientComplain,
      patientPreviousHistory,
      gender,
      dob
    } = this.state;

    axios
      .post("http://localhost:5000/api/patients/add", {
        bht,
        name,
        wardNo,
        bedNo,
        yearlyNo,
        monthlyNo,
        docName,
        dailyNo,
        patientComplain,
        patientPreviousHistory,
        gender,
        dob
      })
      .then(result => {
        console.log(result);
        // alertify.alert("Alert Title", "New Addmission Added!", function() {
        //   alertify.success("Ok");
        // });
        alertify.notify("New Addmission Added!", "success", 5, function() {
          console.log("dismissed");
        });
      });
    this.props.history.push("/patientList/patientView");
  }

  // resetHandler() {
  //   this.setState({
  //     bht: "",
  //     wardNo: "",
  //     bedNo: "",
  //     name: ""
  //   });
  // }
  render() {
    return (
      <div className="container">
        <Row>
          <Col sm="10" xs="6">
            <form onSubmit={this.submitHandler}>
              <Card>
                <CardHeader>
                  <strong>NEW ADDMISSION</strong>
                  <small> Form</small>
                </CardHeader>

                <CardBody>
                  <div className="row">
                    <div className="col-md-6">
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="company">BHT No</Label>
                          <Input
                            type="number"
                            id="bht"
                            name="bht"
                            placeholder="Enter BHT no"
                            onChange={this.inputHandler}
                            value={this.state.bht}
                            required
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="name">Patient Name</Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter patient name"
                            onChange={this.inputHandler}
                            value={this.state.name}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="wardNo">Ward No</Label>
                          <Input
                            type="number"
                            id="wardNo"
                            name="wardNo"
                            placeholder="Enter ward no"
                            onChange={this.inputHandler}
                            value={this.state.wardNo}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <FormGroup>
                            <Label htmlFor="bedNo">Bed No</Label>
                            <Input
                              type="number"
                              id="bedNo"
                              name="bedNo"
                              placeholder="Enter patient bed no"
                              onChange={this.inputHandler}
                              value={this.state.bedNo}
                              required
                            />
                          </FormGroup>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="dailyNo">Daily No</Label>
                          <Input
                            type="number"
                            id="dailyNo"
                            name="dailyNo"
                            placeholder="Enter daily no"
                            onChange={this.inputHandler}
                            value={this.state.dailyNo}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="monthlyNo">Monthly No</Label>
                          <Input
                            type="number"
                            id="monthlyNo"
                            name="monthlyNo"
                            placeholder="Enter monthly no"
                            onChange={this.inputHandler}
                            value={this.state.monthlyNo}
                            required
                          />
                        </Col>
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="yearlyNo">Yearly No</Label>
                          <Input
                            type="number"
                            id="yearlyNo"
                            name="yearlyNo"
                            placeholder="Enter yearly no"
                            onChange={this.inputHandler}
                            value={this.state.yearlyNo}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="patientComplain">
                            Patient Complain
                          </Label>
                          <Input
                            type="text"
                            id="patientComplain"
                            name="patientComplain"
                            placeholder="Enter patient complain"
                            onChange={this.inputHandler}
                            value={this.state.patientComplain}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="patientPreviousHistory">
                            Patient History
                          </Label>
                          <Input
                            type="text"
                            id="patientPreviousHistory"
                            name="patientPreviousHistory"
                            placeholder="Enter history "
                            onChange={this.inputHandler}
                            value={this.state.patientPreviousHistory}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="dob">Date Of Birth</Label>
                          <Input
                            type="date"
                            id="dob"
                            name="dob"
                            placeholder="Enter DOB "
                            onChange={this.inputHandler}
                            value={this.state.dob}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="gender">Gender</Label>
                          <Input
                            type="text"
                            id="gender"
                            name="gender"
                            placeholder="Enter gender "
                            onChange={this.inputHandler}
                            value={this.state.gender}
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="8">
                          <Label htmlFor="docName">Doctor Name</Label>
                          <Input
                            type="text"
                            id="docName"
                            name="docName"
                            placeholder="Enter Doctor Name "
                            onChange={this.inputHandler}
                            value={this.state.docName}
                            required
                          />
                        </Col>
                      </FormGroup>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="float-right">
                    <Button type="submit" size="sm" color="primary">
                      <i className="fa fa-dot-circle-o" /> Submit
                    </Button>
                    <Button
                      type="reset"
                      size="sm"
                      color="danger"
                      onClick={this.resetHandler}
                    >
                      <i className="fa fa-ban" /> Reset
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewAddmission;
