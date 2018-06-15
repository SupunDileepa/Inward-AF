import React, {Component} from 'react';
import { Link } from "react-router-dom";

class ViewReport extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item
    }


}

  render() {
    return (
      <div className="animated fadeIn">

       
            <img src={this.state.item.image} />

           
        
      </div>
    )
  }
}

export default ViewReport;