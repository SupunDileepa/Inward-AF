import React, { Component } from "react";
import { Link } from "react-router-dom";

class TableRow extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // this.deleteItemService = new ItemService();
    // this.deleteMember = this.deleteMember.bind(this);
  }

  // deleteMember() {
  //   // event.preventDefault();
  //   this.deleteItemService.deleteData(this.props.id);
  // }

  sendToLocal(){

    localStorage.clear();

    const patient = {
      pid : this.props.pId,
      bht : this.props.bht,
      name : this.props.name
    }

    localStorage.setItem('patientDetails',JSON.stringify(patient));
  }
  

  render() {
    return (
      <tr>
        <td>{this.props.bht}</td>
        <td>{this.props.pId}</td>
        <td>{this.props.name}</td>
        <td>{this.props.wardNo}</td>
        <td>{this.props.bedNo}</td>
        <td>{this.props.addmittedDate}</td>
        <td>
          <Link to="/bht">
            <button onClick={this.sendToLocal.bind(this)} type="button" className="btn btn-success btn-sm">
              <i className="fa fa-search fa-sm" /> View BHT
            </button>
          </Link>
        </td>
        {/* <td>
          <input
            type="button"
            onClick={this.deleteMember}
            value="Delete"
            className="btn btn-danger"
          />
        </td> */}
      </tr>
    );
  }
}

export default TableRow;
