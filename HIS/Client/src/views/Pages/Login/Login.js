import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

import {
  Container,
  Row,
  Col,
  CardGroup,
  Card,
  CardBody,
  Button,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <form onSubmit={this.onSubmit}>
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="icon-user" />
                          </span>
                        </div>
                        <Input
                          type="email"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.email
                            }
                          )}
                          placeholder="Email Address"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="icon-lock" />
                          </span>
                        </div>
                        <Input
                          type="password"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.password
                            }
                          )}
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                        {errors.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}{" "}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card
                    className="text-white bg-primary py-5 d-md-down-none"
                    style={{ width: 44 + "%" }}
                  >
                    <CardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <Button color="primary" className="mt-3" active>
                          Register Now!
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errros: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
