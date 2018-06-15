import React, { Component } from "react";

class PatientDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // this.deleteItemService = new ItemService();
    // this.deleteMember = this.deleteMember.bind(this);
  }

  render() {
    return (
      <tr>
        <td>{this.props.pId}</td>
        <td>{this.props.gender}</td>
        <td>{this.props.name}</td>
        <td>{this.props.dob}</td>
      </tr>
    );
  }
}

export default PatientDetails;
