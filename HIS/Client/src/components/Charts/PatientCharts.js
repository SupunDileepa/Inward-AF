import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {CardColumns, Card, CardHeader, CardBody, Dropdown, DropdownMenu,DropdownToggle,DropdownItem} from 'reactstrap';

import axios from "axios";


const fever = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Fever Data',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const diabetics = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Diabetic Data',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const liquidBalance = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Liquid Balance Data',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};


class PatientChart extends Component {

    constructor(props){
        super(props);
        this.state ={diabatics:[]};
    }

    sendToLocal(){

        localStorage.clear();
    
        const dates = {
            datetime : this.props.datetime
        }

        const blood_sugar ={
            blood_sugar:this.props.blood_sugar
        }
    
        localStorage.setItem('patientDetails',JSON.stringify(patient));
      }


      componentDidMount(){
          axios.get("http://localhost:5000/api/diabeticschart/333/bht1").then(res=>{
              this.setState({diabatics:res.data});
          }).catch(err=>{
              console.log(err);
          })
      }
    render() {


    //   const da=  this.state.diabatics.map((d,i)=>{

    //     })
        return (
            <div className="animated fadeIn">
                <CardColumns className="cols-2">
                    {/*<Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {*/}
                    {/*this.toggle(0);*/}
                    {/*}}>*/}
                    {/*<DropdownToggle caret>*/}
                    {/*Charts*/}
                    {/*</DropdownToggle>*/}
                    {/*<DropdownMenu>*/}
                    {/*<DropdownItem>Fever Chart</DropdownItem>*/}
                    {/*<DropdownItem>Diabetics Chart</DropdownItem>*/}
                    {/*<DropdownItem>Liquid Balance Chart</DropdownItem>*/}
                    {/*</DropdownMenu>*/}
                    {/*</Dropdown>*/}
                    <Card>
                        <CardHeader>
                            Fever Chart
                            <div className="card-actions">
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className="chart-wrapper">
                                <Line data={fever}
                                      options={{
                                          maintainAspectRatio: false
                                      }}
                                />
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            Diabetic Chart
                            <div className="card-actions">
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className="chart-wrapper">
                                <Line data={diabetics}
                                      options={{
                                          maintainAspectRatio: false
                                      }}
                                />
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            Liquid balance Chart
                            <div className="card-actions">
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className="chart-wrapper">
                                <Line data={liquidBalance}
                                      options={{
                                          maintainAspectRatio: false
                                      }}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </CardColumns>
            </div>
        )
    }
}

export default PatientChart;
