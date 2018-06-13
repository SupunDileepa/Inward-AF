import React, {Component} from 'react';


class WardAdmission extends Component {
  render() {
    return (
      <div className="animated fadeIn">        
        
        <table border="true">
            <tr>
                <th>BHT Number</th>
                <th>Patient Name</th>
            </tr>
            <tr>
                <td>20181</td>
                <td>Maria Anders</td>
                <td><button>view BHT</button></td>
            </tr>
            <tr>
                <td>20182</td>
                <td>John Lenin</td>
                <td><button>view BHT</button></td>
            </tr>
        </table>
        
      </div>
    )
  }
}

export default WardAdmission;
