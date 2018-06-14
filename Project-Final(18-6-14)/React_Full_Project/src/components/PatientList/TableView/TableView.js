import React, { Component } from "react";
import axios from "axios";
import TableRow from "../TableRow";

import { Table } from "reactstrap";

class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:5000/api/patients/all")
      .then(res => {
        this.setState({ patients: res.data });
        // console.log(this.state.patients);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    var array = this.state.patients.obj;
    var tabRow = "";

    if (array) {
      tabRow = array.map((patient, i) => {
        console.log(patient);

        return (
          <TableRow
            key={i}
            bht={patient.bht}
            pId={patient.pId}
            name={patient.name}
            wardNo={patient.wardNo}
            bedNo={patient.bedNo}
            addmittedDate={patient.addmittedDate}
          />
        );
      });
    } else {
      tabRow = "";

      return tabRow;
    }
    return (
      <div className="container">
        <h4>Ward Addmissions</h4>
        <br />
        <Table hover bordered striped responsive size="sm">
          <thead>
            <tr>
              <th>BHT No</th>
              <th>Patient Id</th>
              <th>Patient Name</th>
              <th>Ward No</th>
              <th>Bed No</th>
              <th>Addmitted Date</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>{tabRow}</tbody>
        </Table>
      </div>
    );
  }
}

export default TableView;
