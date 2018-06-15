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
            <button type="button" className="btn btn-success btn-sm">
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
