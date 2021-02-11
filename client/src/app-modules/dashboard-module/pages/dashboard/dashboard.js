import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loadBarData,
  loadDormantBarData,
  loadChequebookBarData,
  loadCreditCardBarData,
} from "../../../../actions/dashboard";
import { Link } from "react-router-dom";

import "./dashboard.css";
import {
  OPEN_YOUR_ACCONT,
  PROCESS_ORMENT_ACCOUNT,
  VALIDATE_CREDIT_CARD,
  REQUEST_CHECKBOOK,
} from "../../../../app-constant/images";

import ReBarChart from "../../../../reusable-components/charts/re-bar-chart";

class Dashboard extends Component {
  state = {
    barChartInfo: {
      title: "Sync New Bank Account Details",
      titleClass: "bar-title",
      height: 300,
      barFillColors: [{ Synced: "#84DC00" }, { NonSynced: "#FF4031" }],
    },
    dormantBarChartInfo: {
      title: "Sync Dormant Bank Account Details",
      titleClass: "bar-title",
      height: 300,
      barFillColors: [{ Synced: "#84DC00" }, { NonSynced: "#FF4031" }],
    },
    chekbookBarChartInfo: {
      title: "Sync Checkbook Details",
      titleClass: "bar-title",
      height: 300,
      barFillColors: [{ Synced: "#84DC00" }, { NonSynced: "#FF4031" }],
    },
    creditCardBarChartInfo: {
      title: "Sync Credit Card Details",
      titleClass: "bar-title",
      height: 300,
      barFillColors: [{ Synced: "#84DC00" }, { NonSynced: "#FF4031" }],
    },
  };
  componentDidMount() {
    this.props.loadBarData();
    this.props.loadDormantBarData();
    this.props.loadChequebookBarData();
    this.props.loadCreditCardBarData();
  }
  render() {
    //console.log(this.props.dashboardAll.creditCardData);
    // console.log(
    //   this.props.dashboardAll.creditCardData.barchartInfo.chequeBarData
    // );
    return (
      <div id="content">
        <div className="inner-container">
          <div className="page-header">
            <h2 className="welcome-text">
              <span>Welcome to </span>Edge Banking Dashboard
            </h2>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            hendrerit urna quis ultricies commodo. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aliquam convallis vel arcu et scelerisque. Quisque vitae est a lacus
            placerat fermentum vitae id dolor. Morbi non orci quam. Donec in
            semper odio.
          </p>

          <p>
            Maecenas efficitur commodo lacus eu molestie. Praesent congue
            iaculis auctor. Nulla facilisis eros non neque hendrerit facilisis.
            Vestibulum nulla dui, imperdiet at diam ut, accumsan tincidunt diam.
            Fusce finibus massa eget congue pellentesque. Donec in semper odio.
            Suspendisse potenti. Sed tempus lacus nibh, ut auctor ipsum varius
            sed. Duis iaculis lectus sed magna efficitur faucibus. Sed molestie
            rhoncus orci, eu fermentum maurisaccumsan non.
          </p> */}
          <div className="row card-group">
            <div className="col-lg-6">
              <div className="graph-holder ">
                <ReBarChart
                  barChartInfo={this.state.barChartInfo}
                  barData={
                    this.props.dashboardAll.createAccountData.barchartInfo
                      ? this.props.dashboardAll.createAccountData.barchartInfo
                          .barData
                      : null
                  }
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="graph-holder ">
                <ReBarChart
                  barChartInfo={this.state.dormantBarChartInfo}
                  barData={
                    this.props.dashboardAll.dormantAccountData.barchartInfo
                      ? this.props.dashboardAll.dormantAccountData.barchartInfo
                          .dormantBarData
                      : null
                  }
                />
              </div>
            </div>
          </div>
          <div className="row card-group">
            <div className="col-lg-6">
              <div className="graph-holder ">
                <ReBarChart
                  barChartInfo={this.state.chekbookBarChartInfo}
                  barData={
                    this.props.dashboardAll.chequebookData.barchartInfo
                      ? this.props.dashboardAll.chequebookData.barchartInfo
                          .chequeBarData
                      : null
                  }
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="graph-holder ">
                <ReBarChart
                  barChartInfo={this.state.creditCardBarChartInfo}
                  barData={
                    this.props.dashboardAll.creditCardData.barchartInfo
                      ? this.props.dashboardAll.creditCardData.barchartInfo
                          .creditBarData
                      : null
                  }
                />
              </div>
            </div>
          </div>
          <div className="row card-group">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <figure>
                    <img
                      src={OPEN_YOUR_ACCONT}
                      width="218px"
                      alt="Create Your Account"
                    />
                  </figure>
                </div>
                <div className="card-body">
                  <h3>Do you want to create an account with us?</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p> */}
                </div>
                <div className="card-footer">
                  <Link to="/create-your-account" className="btn btn-primary">
                    Create Your Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <figure>
                    <img
                      src={PROCESS_ORMENT_ACCOUNT}
                      alt="Process Ornament Account"
                    />
                  </figure>
                </div>
                <div className="card-body">
                  <h3>Do you want to activate your Dormant account?</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p> */}
                </div>
                <div className="card-footer">
                  <Link to="/dormat-account" className="btn btn-primary">
                    Process Dormant Account
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
                  <h3>Do you want to validate your credit card?</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p> */}
                </div>
                <div className="card-footer">
                  <Link to="/credit-card" className="btn btn-primary">
                    Validate your Credit Card
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
                  <h3>Do you want to request for a cheque book?</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p> */}
                </div>
                <div className="card-footer">
                  <Link to="/cheque-book-request" className="btn btn-primary">
                    Process Cheque Book
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

const mapStateToProps = ({ DashboardReducer }) => {
  return {
    dashboardAll: DashboardReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    loadBarData,
    loadDormantBarData,
    loadChequebookBarData,
    loadCreditCardBarData,
  })(Dashboard)
);
