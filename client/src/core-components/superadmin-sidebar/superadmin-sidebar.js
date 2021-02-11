import React from "react";
import { Link } from "react-router-dom";
import { USER_IMAGE } from "../../app-constant/images";

const SuperAdminSidebar = (props) => {
  return (
    <nav id="sidebar">
      <div className="user-profile">
        <div className="profile-pic">
          <img src={USER_IMAGE} alt="" />
        </div>
        <p className="profile-des">John</p>
      </div>
      <ul className="list-unstyled components">
        <li>
          <Link
            to="/configure-create-your-account"
            className="open-your-account"
          >
            Configure Account
          </Link>
        </li>
        <li>
          <Link
            to="/configure-select-master"
            className="process-dormant-account"
          >
            Configure Master Data
          </Link>
        </li>
        <li>
          <Link
            to="/configure-dormat-account"
            className="process-dormant-account"
          >
            Configure Dormant Data
          </Link>
        </li>
        <li>
          <Link to="/configure-cheque-book" className="process-dormant-account">
            Configure Chequebook
          </Link>
        </li>
        <li>
          <Link to="/configure-credit-card" className="process-dormant-account">
            Configure Credit Card
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SuperAdminSidebar;
