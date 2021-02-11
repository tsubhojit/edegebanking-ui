import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
import './App.css';
import modules from "./app-modules";
import Login from "./app-modules/authentication-module/pages/login/login";
import Header from "./core-components/header/header";
import Sidebar from "./core-components/sidebar/sidebar";
// import Footer from "./core-components/footer/footer";
import Services from "./services";

const SecretRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Services.AuthService.isAuthenticated === true?
      <Component {...props} />:
      <Redirect to='/' />
  )} />
);

const App = withRouter(() => {
  return (
    <>
    { Services.AuthService.isAuthenticated && <Header /> }
    <div className="wrapper">
      { Services.AuthService.isAuthenticated && <Sidebar /> }
      <div id="content">
        
        <Route path="/" exact component={Login}/>
        {
          modules.map(module => (
            module.pages.map((page, index) => {
              return <SecretRoute path={page.routeProps.path} exact component={page.routeProps.component} key={index} />
            })
          ))
        }
        {/* { Services.AuthService.isAuthenticated && <Footer /> } */}
      </div>
    </div>
    </>
  );
})

export default App;
