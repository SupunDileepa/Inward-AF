import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import PatientDetails from "./PatientDetails";
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Label,
  Input
} from "reactstrap";
import TableRow from "../PatientList/TableRow/TableRow";

class PatientProfile extends Component {
  constructor(props) {
    super(props);
    //console.log(this.state.patients);
    this.state = {
      p: JSON.parse(localStorage.getItem("patientDetails")),
      patients: []
    };
  }

  componentDidMount() {
    console.log(this.state.p.pid);
    axios
      .get(`http://localhost:5000/api/patients/${this.state.p.pid}`)
      .then(res => {
        this.setState({ patients: res.data });
        console.log(this.state.patients);
      })
      .catch(err => {
        console.log(err);
      });
  }
  // ${this.state.p.pid}

  render() {
    console.log(this.state.patients.obj);
    let patient = this.state.patients;

    return (
      <div className="container">
        <h4 className="text-uppercase">Patient Details</h4>
        <br />
        <div className="row">
          <div className="col-md-3">
            <Card className=" bg-info ">
              <CardHeader className="text-dark font-weight-bold text-uppercase">
                Patient Id
              </CardHeader>
              <CardBody>{patient.pId}</CardBody>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="bg-success ">
              <CardHeader className="text-dark font-weight-bold text-uppercase">
                Gender
              </CardHeader>
              <CardBody>{patient.gender}</CardBody>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="bg-warning">
              <CardHeader className="text-dark  font-weight-bold text-uppercase">
                Full Name
              </CardHeader>
              <CardBody>{patient.name}</CardBody>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className=" bg-danger ">
              <CardHeader className="text-dark font-weight-bold text-uppercase">
                Date Of Birth
              </CardHeader>
              <CardBody>{patient.dob}</CardBody>
            </Card>
          </div>
        </div>

        <h4 className="text-uppercase">Initial Addmission Details Details</h4>
        <br />
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>BHT No </th>
              <th>Ward No</th>
              <th>Bed No</th>
              <th>Monthly No</th>
              <th>Doctor</th>
              <th>Addmitted Date</th>
              <th>Patient Complains</th>
              <th>Patient History</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{patient.bht}</td>
              <td>{patient.wardNo}</td>
              <td>{patient.bedNo}</td>
              <td>{patient.monthlyNo}</td>
              <td>{this.state.patients.docName}</td>
              <td>{patient.addmittedDate}</td>
              <td>{patient.patientComplain}</td>
              <td>{patient.patientPreviousHistory}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default PatientProfile;
