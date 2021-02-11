import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loadOpenYourAccountSchema,
  openYourAccount,
} from "../../../../actions/open-your-account";
import CustomForm from "../../../../reusable-components/CustomForm";

//import "./open-your-account.css";

class OpenYourAccount extends Component {
  state = {};

  componentDidMount() {
    // console.log(
    //   sessionStorage.getItem("bank_id") + " ",
    //   sessionStorage.getItem("country_id")
    // );
    let schemaInfo = {
      bank_id: sessionStorage.getItem("bank_id"),
      country_id: sessionStorage.getItem("country_id"),
    };
    this.props.loadOpenYourAccountSchema(schemaInfo);
  }

  getCustomDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd; // 2020-09-24
    return today;
  };

  onSubmitData = (formData) => {
    let submittedData = {
      account_info: formData,
      processed_indicator: "NI",
      current_date: this.getCustomDate(),
    };
    this.props.openYourAccount(submittedData).then(() => {
      console.log(this.props.openYourAccountResponseData.openYourAccountData);
    });
    //console.log(submittedData);
  };

  render() {
    //console.log(this.props.openYourAccountResponseData);
    return (
      <div id="content">
        <div className="inner-container">
          <div className="page-header">
            <h2>Create an account with us</h2>
          </div>
          <p>Individual Account Opening Form</p>
          <div className="row margin-top-30">
            <div className="col-lg-12">
              {this.props.openYourAccountResponseData
                .openYourAccountSchemaData &&
                this.props.openYourAccountResponseData.openYourAccountSchemaData
                  .formData && (
                  <CustomForm
                    className="open-account"
                    model={
                      this.props.openYourAccountResponseData
                        .openYourAccountSchemaData.formData.data
                    }
                    onSubmit={(model) => {
                      this.onSubmitData(model);
                    }}
                  />
                )}
              {this.props.openYourAccountResponseData.openYourAccountData &&
                this.props.openYourAccountResponseData.openYourAccountData
                  .error === "false" && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {/* <strong>
                      {
                        this.props.openYourAccountResponseData
                          .openYourAccountData.successMsg
                      }
                    </strong> */}
                    Your account creation request has been submitted
                    successfully.
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                )}
              {this.props.openYourAccountResponseData.openYourAccountData &&
                this.props.openYourAccountResponseData.openYourAccountData
                  .error === "true" && (
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    Your account creation request has been submitted
                    successfully.
                    {/* <strong>
                      {
                        this.props.openYourAccountResponseData
                          .openYourAccountData.errorMsg
                      }
                    </strong> */}
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (props) => {
  if (props.openYourAccountReducer.openYourAccountSchemaData) {
    console.log(
      props.openYourAccountReducer.openYourAccountSchemaData.formData.data
    );
  }
  return {
    openYourAccountResponseData: props.openYourAccountReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, { loadOpenYourAccountSchema, openYourAccount })(
    OpenYourAccount
  )
);
