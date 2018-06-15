import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import PatientDetails from "./PatientDetails";

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
        <h4>Patient Details</h4>
        <br />
        <Table hover bordered striped responsive size="sm">
          <thead>
            <tr>
              <th>Patient Id </th>
              <th>Gender</th>
              <th>Full Name</th>
              <th>Date Of Birth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{patient.pId}</td>
              <td>{patient.gender}</td>
              <td>{patient.name}</td>
              <td>{patient.dob}</td>
            </tr>
          </tbody>
        </Table>

        <h4>Initial Addmission Details Details</h4>
        <br />
        <Table hover bordered striped responsive size="sm">
          <thead>
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
        </Table>
      </div>
    );
  }
}
export default PatientProfile;
