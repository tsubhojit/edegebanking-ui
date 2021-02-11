import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import modules from "./app-modules";
import Login from "./app-modules/authentication-module/pages/login/login";
import Header from "./core-components/header/header";
import Sidebar from "./core-components/sidebar/sidebar";

import SuperAdminSidebar from "./core-components/superadmin-sidebar/superadmin-sidebar";

const SecretRoute = ({ component: Component, token, type, ...rest }) => {
  if (token !== null) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/" />;
  }
};

const getSideBar = (token, role) => {
  if (token !== null && role === "employee") {
    return <Sidebar />;
  } else if (token !== null && role === "super_admin") {
    return <SuperAdminSidebar />;
  }
};

const getDashboradMenu = (token, role, currentLoc) => {
  //console.log(token, role);
  if (
    token !== null &&
    role === "employee" &&
    (currentLoc === "/" ||
      currentLoc === "/superadmindashboard" ||
      currentLoc === "/configure-create-your-account" ||
      currentLoc === "/configure-select-master" ||
      currentLoc === "/configure-dormat-account" ||
      currentLoc === "/configure-cheque-book" ||
      currentLoc === "/configure-credit-card")
  ) {
    return <Redirect to="/dashboard" />;
  } else if (
    token !== null &&
    role === "super_admin" &&
    (currentLoc === "/" ||
      currentLoc === "/dashboard" ||
      currentLoc === "/create-your-account" ||
      currentLoc === "/dormat-account" ||
      currentLoc === "/cheque-book-request" ||
      currentLoc === "/credit-card")
  ) {
    return <Redirect to="/superadmindashboard" />;
  } else {
    return <Route path="/" exact component={Login} />;
  }
};

const App = withRouter(({ location }) => {
  let role = sessionStorage.getItem("role");
  let token = sessionStorage.getItem("token");
  let currentLoc = location.pathname;

  return (
    <React.Fragment>
      {token !== null && <Header />}
      <div className="wrapper">
        {getSideBar(token, role)}
        <div id="content">
          {getDashboradMenu(token, role, currentLoc)}

          {modules.map((module) =>
            module.pages.map((page, index) => {
              //console.log(page);
              return (
                <SecretRoute
                  path={page.routeProps.path}
                  type={page.type}
                  exact
                  component={page.routeProps.component}
                  key={index}
                  currentLocation={location.pathname}
                  token={token}
                />
              );
            })
          )}
        </div>
      </div>
    </React.Fragment>
  );
});

export default App;
