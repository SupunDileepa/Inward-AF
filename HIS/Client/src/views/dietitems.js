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


  render() {
    return (
      

       
            



                          
                                <tr>
                                    <td>{this.state.item.foodgroup}</td>
                                    <td>{this.state.item.servingsize}</td>
                                    <td>{this.state.item.calories}</td>
                                    <td>{this.state.item.energy}</td>
                                    <br/>
                                </tr>

                        

                
                          

           
        
      
    )
  }
}

export default DietItem;