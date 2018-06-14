import React, {Component} from 'react';
import {
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Collapse,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButton
} from 'reactstrap';
import axios from "axios/index";

class InternalTransferForms extends Component {
    constructor(props) {
        super(props);

       // this.toggle = this.toggle.bind(this);
        this.state = {
            transfer_ward: String,
         //   transfer_from_ward: String,
            reson_for_trasnsfer: String,
            report_of_spacial_examination: String,
            treatment_suggested: String,
            transfer_date:Date,
          //  transfer_created_user: String,
          //  read_transfer: String,
          //  new_bht_no: String,
            remark: String
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler(e){
        e.preventDefault();

        const { transfer_ward, reson_for_trasnsfer, report_of_spacial_examination, treatment_suggested, transfer_date, remark} = this.state;

        axios.post('http://localhost:5000/api/internalTransfer/add', { transfer_ward, reson_for_trasnsfer, report_of_spacial_examination, treatment_suggested, transfer_date, remark})
            .then((result) => {
                console.log(result);
            });
        this.props.history.push("/internalTransfer");
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>

                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>
                                <strong>Internal Transfer</strong>
                            </CardHeader>
                            <Form onSubmit={this.submitHandler}>
                            <CardBody>
                                <FormGroup>
                                    <Label htmlFor="toward">Transfer Ward</Label>
                                    <Input type="text" id="transfer_ward" name="transfer_ward" value={this.state.transfer_ward} onChange={this.inputHandler} placeholder=""/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="repSpExm">Report of Spacial Examination</Label>
                                    <Input type="text" id="report_of_spacial_examination" name="report_of_spacial_examination" value={this.state.report_of_spacial_examination} onChange={this.inputHandler} placeholder=""/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="reason">Reason for Transfer</Label>
                                    <Input type="text" id="reson_for_trasnsfer" name="reson_for_trasnsfer" value={this.state.reson_for_trasnsfer} onChange={this.inputHandler} placeholder=""/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="treatment">Treatment suggested</Label>
                                    <Input type="text" id="treatment_suggested" name="treatment_suggested" value={this.state.treatment_suggested} onChange={this.inputHandler} placeholder=""/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="trDate">Transfer Date Time</Label>
                                    <Input type="text" id="transfer_date" name="transfer_date" value={this.state.transfer_date} onChange={this.inputHandler} placeholder=""/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="remark">Remark</Label>
                                    <Input type="text" id="remark" name="remark" value={this.state.remark} onChange={this.inputHandler} placeholder=""/>
                                </FormGroup>
                                <FormGroup className="form-actions">
                                    <Button type="submit" size="sm" color="success">Transfer Patient</Button>
                                </FormGroup>
                            </CardBody>
                            </Form>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default InternalTransferForms;
