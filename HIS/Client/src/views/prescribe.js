import React,{Component} from 'react';
import { Link } from "react-router-dom";

import PrescribeItem from "./prescribeItems";
import PrescribeItemExpand from "./prescribeItemsExpand";
import DetailBar from "./details";




class Prescribe extends Component {


  constructor(){

    super();

   // var it

    this.state={

    	user:JSON.parse(localStorage.getItem('session')),
      prescriptions:[],

      expand:false,
      name:"Expand Drug Chart"
      //item:it

    }
    console.log(this.state.name);

  }

  componentWillMount(){

     // fetch(`/api/prescriptions/${this.state.user.pid}/${this.state.user.bht}`)

     fetch('http://localhost:5000/api/prescriptions/1/123')

        .then(res=>res.json())
         .then(prescriptions=> this.setState({prescriptions},()=> console.log(prescriptions)));

  }

 expandChart(){


           if(this.state.expand){
          this.setState({expand:false,name:"Expand Drug Chart"});
          return;
        }

        this.setState({expand:true,name:"Minimize Drug Chart"});

     
         this.setState({ state: this.state });


  	}
 	
  		
  	

  render(){


  	// const style={

  	// 	backgroundColor:'white',
  	// 	border:'1px solid blue',
  	// 	padding:'8px',
  	// 	cursor:'pointer'


  	// };

    if(this.state.expand){


  	var prescriptionItems1 =this.state.prescriptions.map((prescription,i)=>{
  					
  		return(
					<PrescribeItemExpand key={i} item={prescription}/>
  	 		)
  						
  	 })
    //this.setState(this.state);


}
    if(!this.state.expand){

      var prescriptionItems =this.state.prescriptions.map((prescription,i)=>{
            
      return(
          <PrescribeItem key={i} item={prescription}/>
        )
              
     })

    }

     // this.setState({item:prescriptionItems});


  	return(

  			<div className='main_prescriptions'>
  			 
          <DetailBar/>
  		
  				  <div className="row">
          
              <div className="col-md-2">

                <Link to="/bht/prescribedrugs" className="btn btn-lg btn-warning">

                  Prescribe Drugs
                </Link>

              </div>



              <div className="col-md-2">

                <button  onClick={this.expandChart.bind(this)} className="btn btn-lg btn-success" >
                 {this.state.name}

               </button>

              </div>


            </div>


                 <div className="panel panel-primary">

                 <br/>
                 <br/>
                 <br/>
                    <h3>Active Drugs</h3>
                 <br/>
                 <br/>
                 <br/>

                    {prescriptionItems1}
                    {prescriptionItems}


                 </div>

  				
		

  					


  			
		
			</div>
  		);
     }
}


export default Prescribe; 	





 

