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

class InternalTransferForms extends Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      transfer_ward: "",
      reason_for_transfer: "",
      report_of_special_examination: "",
      treatment_suggested: "",
      transfer_date: "",
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

    const {
      transfer_ward,
      reason_for_transfer,
      report_of_special_examination,
      treatment_suggested,
      transfer_date,
      remark
    } = this.state;

    axios
      .post("http://localhost:5000/api/internalTransfer/add", {
        transfer_ward,
        reason_for_transfer,
        report_of_special_examination,
        treatment_suggested,
        transfer_date,
        remark
      })
      .then(result => {
        console.log(result);
      });
    this.props.history.push("/internalTransfer");
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
                <strong>Internal Transfer</strong>
              </CardHeader>
              <Form onSubmit={this.submitHandler}>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="toward">Transfer Ward</Label>
                    <Input
                      type="text"
                      id="transfer_ward"
                      name="transfer_ward"
                      value={this.state.transfer_ward}
                      onChange={this.inputHandler}
                      placeholder=""
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="repSpExm">
                      Report of Spacial Examination
                    </Label>
                    <Input
                      type="text"
                      id="report_of_spacial_examination"
                      name="report_of_special_examination"
                      value={this.state.report_of_special_examination}
                      onChange={this.inputHandler}
                      placeholder=""
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="reason">Reason for Transfer</Label>
                    <Input
                      type="text"
                      id="reson_for_trasnsfer"
                      name="reason_for_transfer"
                      value={this.state.reason_for_transfer}
                      onChange={this.inputHandler}
                      placeholder=""
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="treatment">Treatment suggested</Label>
                    <Input
                      type="text"
                      id="treatment_suggested"
                      name="treatment_suggested"
                      value={this.state.treatment_suggested}
                      onChange={this.inputHandler}
                      placeholder=""
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="trDate">Transfer Date Time</Label>
                    <Input
                      type="date"
                      id="transfer_date"
                      name="transfer_date"
                      value={this.state.transfer_date}
                      onChange={this.inputHandler}
                      placeholder=""
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
        </Row>
      </div>
    );
  }
}

export default InternalTransferForms;
