import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./superadmin-dashboard.css";
import {
  OPEN_YOUR_ACCONT,
  PROCESS_ORMENT_ACCOUNT,
  VALIDATE_CREDIT_CARD,
  REQUEST_CHECKBOOK,
} from "../../../../app-constant/images";

class SuperAdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="content">
        <div className="inner-container">
          <div className="page-header">
            <h2 className="welcome-text">
              <span>Welcome to </span>Edge Banking Dashboard
            </h2>
          </div>
          {/* <p>
            With the help of this application banking will be easy and take a
            new shape.
          </p>

          <p>This is future of banking. </p> */}

          <div className="row card-group">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <figure>
                    <img
                      src={OPEN_YOUR_ACCONT}
                      width="218px"
                      alt="Configure Open Your Account"
                    />
                  </figure>
                </div>
                <div className="card-body">
                  <h3>Configure Account</h3>
                  <p>Manipulate Create account</p>
                </div>
                <div className="card-footer">
                  <Link
                    to="/configure-create-your-account"
                    className="btn btn-primary"
                  >
                    Configure Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <figure>
                    <img src={PROCESS_ORMENT_ACCOUNT} alt="Add Master Data" />
                  </figure>
                </div>
                <div className="card-body">
                  <h3>Add master Data</h3>
                  <p>Manipulate Master Data.</p>
                </div>
                <div className="card-footer">
                  <Link
                    to="/configure-select-master"
                    className="btn btn-primary"
                  >
                    Master Data
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <figure>
                    <img
                      src={VALIDATE_CREDIT_CARD}
                      alt="Process Dormat Account"
                    />
                  </figure>
                </div>
                <div className="card-body">
                  <h3>Dormant Account</h3>
                  <p>Manipulate Dormant Data.</p>
                </div>
                <div className="card-footer">
                  <Link
                    to="/configure-dormat-account"
                    className="btn btn-primary"
                  >
                    Dormant Data
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <figure>
                    <img src={REQUEST_CHECKBOOK} alt="Request Checkbook" />
                  </figure>
                </div>
                <div className="card-body">
                  <h3>Checkbook Request</h3>
                  <p>Manipulate Checkbook Data.</p>
                </div>
                <div className="card-footer">
                  <Link to="/configure-cheque-book" className="btn btn-primary">
                    Checkbook Data
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <figure>
                    <img
                      src={VALIDATE_CREDIT_CARD}
                      alt="Validate Credit Card"
                    />
                  </figure>
                </div>
                <div className="card-body">
                  <h3>Validate Credit Card</h3>
                  <p>Manipulate Credit Card Data.</p>
                </div>
                <div className="card-footer">
                  <Link to="/configure-credit-card" className="btn btn-primary">
                    Credit Card Data
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuperAdminDashboard;
