import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { createAccount } from "../../../../actions/create-account";
import "./open-your-account.css";

class OpenYourAccount extends Component {
  state = {
    isFormValid: true,
    errorMsg: "",
    accountNumber: "",
    toa: "",
    fullName: "",
    dob: "",
    occupationType: "",
    status: "",
    annualIncome: "",
    nationality: "",
    flatNumber: "",
    streetNumber: "",
    city: "",
    district: "",
    state: "",
    country: "",
    pinCode: "",
    telephone: "",
    mobile: "",
  };

  changeField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onCreateAccountSubmit = (event) => {
    event.preventDefault();

    let requestPayload = {
      accountNumber: this.state.accountNumber,
      branchCode: this.state.branchCode,
      toa: this.state.toa,
      fullName: this.state.fullName,
      dob: this.state.dob,
      fathersName: this.state.fathersName,
      occupationType: this.state.occupationType,
      status: this.state.status,
      annualIncome: this.state.annualIncome,
      nationality: this.state.nationality,
      flatNumber: this.state.flatNumber,
      streetNumber: this.state.streetNumber,
      city: this.state.city,
      district: this.state.district,
      state: this.state.state,
      country: this.state.country,
      pinCode: this.state.pinCode,
      telephone: this.state.telephone,
      mobile: this.state.mobile,
    };
    //console.log(requestPayload);
    this.props.createAccount(requestPayload);
  };

  render() {
    return (
      <div id="content">
        <div className="inner-container">
          <div className="page-header">
            <h2>Open an account with us</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            hendrerit urna quis ultricies commodo. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aliquam convallis vel arcu et scelerisque. Quisque vitae est a lacus
            placerat fermentum vitae id dolor. Morbi non orci quam. Donec in
            semper odio.
          </p>

          <form name="createAccountForm" onSubmit={this.onCreateAccountSubmit}>
            <div className="row margin-top-30">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Acount Number">Acount Number</label>
                          <input
                            type="text"
                            className="form-control"
                            name="accountNumber"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Branch Code">Branch Code</label>
                          <input
                            type="text"
                            className="form-control"
                            name="branchCode"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="TOA">Type of Account</label>
                          <select
                            className="form-control"
                            name="toa"
                            onChange={this.changeField}
                          >
                            <option value="">Select</option>
                            <option value="savings">Savings</option>
                            <option value="current">Current</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Full Name">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="fullName"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="DOB">Date of birth</label>
                          <input
                            type="date"
                            className="form-control"
                            name="dob"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Father's Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fathersName"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="occupation">Occupation Type</label>
                          <select
                            className="form-control"
                            name="occupationType"
                            onChange={this.changeField}
                          >
                            <option value="">Select</option>
                            <option value="salaried">Salaried</option>
                            <option value="business">Business</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="status">Status</label>
                          <select
                            className="form-control"
                            name="status"
                            onChange={this.changeField}
                          >
                            <option value="">Select</option>
                            <option value="active">Active</option>
                            <option value="active">Inactive</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Annual Income">
                            Annual Income (in INR)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="annualIncome"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Nationality">Nationality</label>
                          <select
                            className="form-control"
                            name="nationality"
                            onChange={this.changeField}
                          >
                            <option value="">Select</option>
                            <option value="indian">Indian</option>
                            <option value="canadian">Canadian</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Flat Number">Flat Number</label>
                          <input
                            type="text"
                            className="form-control"
                            name="flatNumber"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Street Number">Street Number</label>
                          <input
                            type="text"
                            className="form-control"
                            name="streetNumber"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="City">City</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="District">District</label>
                          <input
                            type="text"
                            className="form-control"
                            name="district"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="State">State</label>
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Country">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            name="country"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Pin Code">Pin Code</label>
                          <input
                            type="text"
                            className="form-control"
                            name="pinCode"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Telephone">Telephone</label>
                          <input
                            type="text"
                            className="form-control"
                            name="telephone"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Mobile">Mobile</label>
                          <input
                            type="text"
                            className="form-control"
                            name="mobile"
                            onChange={this.changeField}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="card-footer text-align-right">
                    <div className="row">
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="btn btn-secondary float-right"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  {this.props.createAccountResponseData &&
                    this.props.createAccountResponseData.status ===
                      "success" && (
                      <div
                        className="alert alert-danger mar-top10"
                        role="alert"
                      >
                        {this.this.props.createAccountResponseData.msg}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ createAccountReducer }) => {
  console.log("open account response");
  console.log(createAccountReducer);
  return {
    //createAccountResponseData: createAccountReducer.createAccountData[0],
  };
};

export default withRouter(
  connect(mapStateToProps, { createAccount })(OpenYourAccount)
);
