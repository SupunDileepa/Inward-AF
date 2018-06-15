import React, {Component} from 'react';

class AllergyItem extends Component {

    constructor(props){
        super(props);
        this.state={
            item:props.item
        }
    }

    goToUpdate(){
        var nameUrl = this.state.item.name.replace(/ /g, "_");
        var remarkUrl = this.state.item.remark.replace(/ /g, "_");
        var categoryUrl = this.state.item.category.replace(/ /g, "_");
        var severityUrl = this.state.item.severity.replace(/ /g, "_");
        var statusUrl = this.state.item.status.replace(/ /g, "_");

        var url = '/#/bht/allergies/update/' + this.state.item.pid + '/' + this.state.item.bht + '/' + this.state.item.aid + '/' + nameUrl + '/' + remarkUrl + '/' + categoryUrl + '/' + severityUrl + '/' + statusUrl;
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