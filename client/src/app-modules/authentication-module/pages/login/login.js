import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
// import _ from 'lodash';
import { LOGIN_GRAPHIC } from "../../../../app-constant/images";
import {
  doSignin,
  doEmailVerification,
  doOtpVerification,
} from "../../../../actions/authentication";

import "./login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: true,
      errorMsg: "",
      username: "",
      password: "",
      toggleEmailModal: false,
      toggleOtpModal: false,
      email: "",
      otpData: "",
      invalidEmail: false,
      invalidOtp: false,
    };
  }

  changeDataField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSignInSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      this.setState({
        isFormValid: false,
        errorMsg: "Username and password are required!",
      });
    } else {
      let requestPayload = {
        username: this.state.username,
        password: this.state.password,
      };

      this.props.doSignin(requestPayload).then(() => {
        //console.log(this.props.userInfo);
        if (
          this.props.userInfo.error === "false" &&
          this.props.userInfo.token !== "" &&
          this.props.userInfo.role === "employee"
        ) {
          //console.log("Non admin");
          sessionStorage.setItem("token", this.props.userInfo.token);
          sessionStorage.setItem("bank_id", this.props.userInfo.bank_id);
          sessionStorage.setItem("country_id", this.props.userInfo.country_id);
          sessionStorage.setItem("role", this.props.userInfo.role);
          this.setState({ isFormValid: true, errorMsg: "" });
          this.props.history.push("/dashboard");
        } else if (
          this.props.userInfo.error === "false" &&
          this.props.userInfo.token !== "" &&
          this.props.userInfo.role === "super_admin"
        ) {
          sessionStorage.setItem("token", this.props.userInfo.token);
          sessionStorage.setItem("role", this.props.userInfo.role);
          // sessionStorage.setItem("bank_id", this.props.userInfo.bank_id);
          // sessionStorage.setItem("country_id", this.props.userInfo.country_id);
          this.setState({ isFormValid: true, errorMsg: "" });
          this.props.history.push("/superadmindashboard");
        } else {
          this.setState({
            isFormValid: false,
            errorMsg: "Username and/or password are not exist!",
          });
        }
      });
    }
  };

  onEmailVerificationSubmit = (event) => {
    event.preventDefault();
    if (this.state.email !== "") {
      let submittedObj = {
        email: this.state.email,
      };
      this.props.doEmailVerification(submittedObj).then(() => {
        if (this.props.userInfo.error === "false") {
          this.setState({ invalidEmail: false });
          this.doToggleEmailModal();
          this.doToggleOtpModal();
        } else {
          this.setState({ invalidEmail: true });
        }
      });
    }
  };

  onOtpVerificationSubmit = (event) => {
    event.preventDefault();
    if (this.state.otpData !== "") {
      let submittedObj = {
        otp: this.state.otpData,
        email: this.state.email,
      };
      this.props.doOtpVerification(submittedObj).then(() => {
        if (this.props.userInfo.error === "false") {
          this.doToggleOtpModal();
          console.log(this.props.userInfo);
          sessionStorage.setItem("token", this.props.userInfo.token);
          sessionStorage.setItem("role", this.props.userInfo.role);
          sessionStorage.setItem("bank_id", this.props.userInfo.bank_id);
          sessionStorage.setItem("country_id", this.props.userInfo.country_id);
          this.props.history.push("/create-your-account");
        } else {
          this.setState({ invalidOtp: true });
        }
      });
    }
  };

  doToggleEmailModal = () => {
    this.setState({ toggleEmailModal: !this.state.toggleEmailModal });
  };

  doToggleOtpModal = () => {
    this.setState({ toggleOtpModal: !this.state.toggleOtpModal });
  };

  render() {
    return (
      <section id="wrapper">
        <div className="login-container">
          <div className="login-graphic">
            <figure className="graphic-figure">
              <img src={LOGIN_GRAPHIC} alt="logo" />
            </figure>
          </div>
          <div className="login-section">
            <span className="login-logo">Finance</span>
            <div className="page-header">
              <h3>Sign in</h3>
            </div>
            <form name="loginForm" onSubmit={this.onSignInSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control username"
                  name="username"
                  placeholder="Username"
                  onChange={this.changeDataField}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control password"
                  name="password"
                  placeholder="Password"
                  onChange={this.changeDataField}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign in
              </button>
            </form>
            {!this.state.isFormValid && (
              <div className="alert alert-danger mar-top10" role="alert">
                {this.state.errorMsg}
              </div>
            )}
            <div className="row margin-top-30">
              <div className="col-lg-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  &nbsp;&nbsp;
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <a
                  href="change-password.html"
                  className="change-password float-right"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-6">
                <p className="margin-top-15">Don't have your account ?</p>
              </div>
              <div className="col-lg-6">
                <a
                  href="register.html"
                  className="btn btn-secondary float-right"
                >
                  Register
                </a>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-12">
                {/* <Button variant="primary" onClick={this.doToggleEmailModal}>
                  Create your Account
                </Button> */}
                <button
                  type="submit"
                  className="btn btn-success w-100"
                  onClick={this.doToggleEmailModal}
                >
                  Create your Account
                </button>
              </div>
            </div>
          </div>
        </div>

        <Modal
          size="lg"
          show={this.state.toggleEmailModal}
          onHide={this.doToggleEmailModal}
        >
          <form
            name="emailVerification"
            onSubmit={this.onEmailVerificationSubmit}
          >
            <Modal.Header closeButton>
              <Modal.Title>Email Verification Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onChange={this.changeDataField}
                  required
                />
              </div>
              {this.state.invalidEmail && (
                <div className="alert alert-danger mar-top10" role="alert">
                  {this.props.userInfo.errorMsg}
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Modal.Footer>
          </form>
        </Modal>

        <Modal
          size="lg"
          show={this.state.toggleOtpModal}
          onHide={this.doToggleOtpModal}
        >
          <form name="otpVerification" onSubmit={this.onOtpVerificationSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Otp Verification Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="otpData"
                  placeholder="Enter Otp"
                  onChange={this.changeDataField}
                  required
                />
              </div>
              {this.state.invalidOtp && (
                <div className="alert alert-danger mar-top10" role="alert">
                  {this.props.userInfo.errorMsg}
                </div>
              )}
              {this.props.userInfo.error === "false" && (
                <div className="alert alert-success mar-top10" role="alert">
                  {this.props.userInfo.successMsg}
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </section>
    );
  }
}

Login.propTypes = {
  doSignin: PropTypes.func.isRequired,
  //userInfo: PropTypes.objectOf(PropTypes.shape({}).isRequired).isRequired
};

Login.defaultProps = {
  userInfo: {},
};

const mapStateToProps = ({ authenticationReducer }) => {
  return {
    userInfo: authenticationReducer.userInfo,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    doSignin,
    doEmailVerification,
    doOtpVerification,
  })(Login)
);
