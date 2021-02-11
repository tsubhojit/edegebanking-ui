import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { USER_ICON, USER_IMAGE } from "../../app-constant/images";
import "./header.css";
import { Redirect } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("active");
      });
    });
  }

  signOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("isAdmin");
    return <Redirect to="/" />;
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn hamburger"
          ></button>
          {sessionStorage.getItem("isAdmin") === "false" ? (
            <Link to="/dashboard" className="navbar-brand"></Link>
          ) : (
            <Link to="/superadmindashboard" className="navbar-brand"></Link>
          )}
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item ">
                <div className="btn-group pull-right user-profile-dropdown">
                  <button
                    type="button"
                    className="btn dropdown-toggle no-bg"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src={USER_ICON} alt="" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="user-profile">
                      <div className="profile-pic">
                        <img src={USER_IMAGE} alt="" />
                      </div>
                      <p className="profile-des">
                        John
                        <span>sample@sample.email.com</span>
                      </p>
                    </div>
                    <Link
                      to=""
                      className="dropdown-item btn-logout"
                      onClick={this.signOut}
                    >
                      Log out
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
