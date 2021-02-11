import React from "react";
import { Link } from "react-router-dom";
import { USER_IMAGE } from "../../app-constant/images";

const Sidebar = (props) => {
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
          <Link to="/create-your-account" className="open-your-account">
            Create Your Account
          </Link>
        </li>
        <li>
          <Link to="/dormat-account" className="process-dormant-account">
            Activate Dormant Account
          </Link>
        </li>
        <li>
          <Link to="/credit-card" className="validate-your-credit-card">
            Credit Card Processing
          </Link>
        </li>
        <li>
          <Link to="/cheque-book-request" className="process-cheque-book">
            Request Cheque Book
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
