import React, { Component } from "react";
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Label,
  Input
} from "reactstrap";

class ViewAddmission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col xs="12" sm="6" md="4">
        <Card className="text-white bg-info">
          <CardHeader>Card title</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </CardBody>
          <CardFooter>React</CardFooter>
        </Card>
      </Col>
    );
  }
}

export default ViewAddmission;
