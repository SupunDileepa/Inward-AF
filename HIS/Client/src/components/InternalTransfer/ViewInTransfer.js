import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";

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
//import TableRow from "../PatientList/TableRow/TableRow";

class ViewInTransfers extends Component {
  constructor(props) {
    super(props);
    //console.log(this.state.patients);
    this.state = {
      p: JSON.parse(localStorage.getItem("patientDetails")),
      ext: []
    };
  }

  componentDidMount() {
    console.log(this.state.p.pid);
    axios
      .get("http://localhost:5000/api/internalTransfer/all")
      .then(res => {
        this.setState({ ext: res.data });
        console.log(this.state.ext);
      })
      .catch(err => {
        console.log(err);
      });
  }
  // ${this.state.p.pid}

  render() {
    console.log(this.state.ext);
    let external = this.state.ext;

    return (
      <div className="container">


        <h4 className="text-uppercase">Internal Transfer Details</h4>
        <br />
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
            <th>Patient ID </th>
              <th>Patient name</th>
              <th>BHT number</th>
              <th>Transfer from </th>
              <th>Reason for transfer</th>
              <th>Treatment suggested</th>

            </tr>
          </thead>
          <tbody>

            {this.state.ext.map((external,i)=>
             <tr key={i}>
             <td>{this.state.p.pid}</td>
             <td>{this.state.p.name}</td>
             <td>{this.state.p.bht}</td>
             <td>{external.transfer_ward}</td>
             <td>{external.reason_for_transfer}</td>
             <td>{external.treatment_suggested}</td>
        
           </tr>
            )}
           
          </tbody>
        </table>
      </div>
    );
  }
}
export default ViewInTransfers;
