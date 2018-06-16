import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ViewReport from "./viewReport";
import { HashRouter, Route, Switch } from "react-router-dom";

class DietItem extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item
    }



}

    showReport(){


        localStorage.setItem('image',JSON.stringify(this.state.item.image));

        // console.log(this.state.item.image);
        // <Switch>
        
        // <Route exact path="/bht/viewreport" name="Landing" render={(props) => <viewReport {...props} item={this.state.item} />} />
        //  </Switch>
        //  window.open('/#/bht/viewreport');
     
    }

  render() {
    return (
      

       
            



                          
                                <tr>
                                    <td>{this.state.item.testName}</td>
                                    <td>{this.state.item.testResult}</td>
                                    <td>{this.state.item.tester}</td>
                                    <td><Link to="/bht/viewreport"><button onClick={this.showReport.bind(this)} className="btn btn-secondary">View Report</button></Link></td>
                                    <br/>
                                </tr>

                        

                
                          

           
        
      
    )
  }
}

export default DietItem;