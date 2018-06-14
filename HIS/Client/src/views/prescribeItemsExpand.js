import React, {Component} from 'react';
import { Link } from "react-router-dom";

class PrescribeItemExpand extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item
    }


}

  render() {
    return (
      <div className="animated fadeIn">

       
            
                    <table className="table table-hover">

                      

                        <thead>
                        <th>Drug</th>
                        <th>Dosage</th>
                        <th>Frequency</th>               
                        </thead>
                        <tbody>


                          
                                <tr>
                                    <td>{this.state.item.drugName}</td>
                                    <td>{this.state.item.dose}</td>
                                    <td>{this.state.item.frequency}</td>

                                </tr>

                        

                        </tbody>
                    </table> 

                          

           
        
      </div>
    )
  }
}

export default PrescribeItemExpand;