import React, {Component} from 'react';
import { Link } from "react-router-dom";

class LabItem extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item
    }


}

  render() {
    return (
      

       
            



                          
                                <tr>
                                    <td>{this.state.item.testName}</td>
                                    <td>{this.state.item.testResult}</td>
                                    <td>{this.state.item.tester}</td>
                                    <td><button className="btn btn-secondary">View Report</button></td>
                                    <br/>
                                </tr>

                        

                
                          

           
        
      
    )
  }
}

export default LabItem;