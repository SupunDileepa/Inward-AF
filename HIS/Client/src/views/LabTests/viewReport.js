import React, {Component} from 'react';
import { Link } from "react-router-dom";
import DetailBar from "./../details";

class ViewReport extends Component {

constructor(props){

    super(props);
    this.state={
        image:JSON.parse(localStorage.getItem('image'))
    }

    console.log(this.state.image)
}

  render() {
    return (
      <div className="animated fadeIn">

            <DetailBar/>
            <br/>
            <br/>
            <h1>Report</h1>
            <br/>
            <br/>

            <img src={this.state.image} />

          

           
        
      </div>
    )
  }
}

export default ViewReport;