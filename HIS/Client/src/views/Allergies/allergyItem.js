import React, {Component} from 'react';

class AllergyItem extends Component {

    constructor(props){
        super(props);
        this.state={
            item:props.item
        }
    }

    goToUpdate(){
        var url = '/#/bht/allergies/update/' + this.state.item.pid + '/' + this.state.item.bht + '/' + this.state.item.aid;
        window.open(url, '_self');       
    }

    render() {
        return (              
            <tr>
                <td>{this.state.item.name}</td>
                <td>{this.state.item.remark}</td>
                <td>{this.state.item.category}</td>
                <td>{this.state.item.severity}</td>
                <td>{this.state.item.status}</td>
                <td><button onClick={this.goToUpdate.bind(this)}>Edit</button></td>
            </tr>  
        )
    }
}

export default AllergyItem;