import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import PatientDetails from "./PatientDetails";

class PatientProfile extends Component {
  constructor(props) {
    super(props);
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
        //console.log(this.state.patients);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    var arr = this.state.patients.obj;
    var patientDetails = "";
    console.log(arr);
    if (arr) {
      patientDetails = arr.map((patient, i) => {
        console.log(patient);
        return (
          <PatientDetails
            key={i}
            pId={patient.pId}
            gender={patient.gender}
            name={patient.name}
            dob={patient.dob}
          />
        );
      });
    } else {
      patientDetails = "";
      return patientDetails;
    }

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
          <tbody>{patientDetails}</tbody>
        </Table>
      </div>
    );
  }
}
export default PatientProfile;
