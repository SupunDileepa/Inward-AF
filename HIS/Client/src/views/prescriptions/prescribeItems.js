import React, {Component} from 'react';
import { Link } from "react-router-dom";

class PrescribeItem extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item
    }


}

  render() {
    return (
      <div className="animated fadeIn">

        <ul className="collection">
        
            <li className="collection-items">Duration : {this.state.item.duration}</li>
            <li className="collection-items">Prescribed By : {this.state.item.prescriber}</li>

        </ul>    
        
      </div>
    )
  }
}

export default PrescribeItem;