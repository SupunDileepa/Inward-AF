import React,{Component} from 'react';
import { Link } from "react-router-dom";


class Prescribe extends Component {


  constructor(){

    super();
    this.state={

    	user:JSON.parse(localStorage.getItem('session')),
      prescriptions:[],
      expand:false
    }
    console.log(this.state.name);

  }

  componentWillMount(){

     // fetch(`/api/prescriptions/${this.state.user.pid}/${this.state.user.bht}`)
     fetch('/api/prescriptions/1/123')
        .then(res=>res.json())
         .then(prescriptions=> this.setState({prescriptions},()=> console.log(prescriptions)));

  }

 expandChart(){

        this.setState({expand:true});
  	}
 	
  		
  	

  render(){

  	const style={

  		backgroundColor:'white',
  		border:'1px solid blue',
  		padding:'8px',
  		cursor:'pointer'


  	};

  	// const foodItems =this.state.foods.map((food,i)=>{
  					
  	// 	return(
			// 		<FoodItem key={i} item={food}/>
  	//  		)
  						
  	//  })
  	return(

  			<div className='main_prescriptions'>
  			
  		
  				  <div className="row">
          
              <div class="col-md-2">

                <Link to="/login" className="btn btn-lg btn-warning">
                  Prescribe Drugs
                </Link>

              </div>


              <div class="col-md-2">

                <button  onClick={this.expandChart.bind(this)} class="btn btn-lg btn-success" >
                 Expand Drug Chart
               </button>

              </div>


            </div>
  				
		

  					


  			
		
			</div>
  		);
     }
}


export default Prescribe; 	




