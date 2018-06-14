import React, {Component} from 'react';
import { Link } from "react-router-dom";

class WardAdmission extends Component {



  render() {
    return (
      <div className="animated fadeIn">        
        
        <table border="true">
            <tr>
                <th>BHT Number</th>
                <th>PID</th>
                <th>Patient Name</th>
            </tr>
            <tr>
                <td>20181</td>
                <td>1</td>
                <td>Maria Anders</td>
                <td> <Link to="/bht" className="btn btn-lg btn-primary"> View BHT </Link></td>
            </tr>
            <tr>
                <td>20182</td>
                <td>2</td>
                <td>John Lenin</td>
                <td><button>view BHT</button></td>
            </tr>
        </table>
        
      </div>
    )
  }
}

export default WardAdmission;
