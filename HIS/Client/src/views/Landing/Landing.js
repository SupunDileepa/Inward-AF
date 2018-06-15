import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">HIS INWARD</h1>
                <p className="lead">
                  {" "}
                  Inward care is available for patients, who are in need of this
                  facility. The location of the hospital has been specially
                  selected and the building architecture has been specially
                  designed in such a way, to provide the patients who are
                  receiving inward care, the best environment and comforts
                  during their stay in the hospital.
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
