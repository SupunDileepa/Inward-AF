import React, {Component} from 'react';


class WardAdmission extends Component {

  gotoBhtFull(){
    window.open('/#/bht' + '20181','_blank');
  }

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
                <td><button onClick={this.gotoBhtFull.bind(this)}>view BHT</button></td>
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
