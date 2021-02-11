import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loadChequebookSchema,
  doSaveChequebook,
} from "../../../../actions/chequebook";
import CustomForm from "../../../../reusable-components/CustomForm";

//import "./open-your-account.css";

class Chequebook extends Component {
  state = {};

  componentDidMount() {
    let schemaInfo = {
      bank_id: sessionStorage.getItem("bank_id"),
      country_id: sessionStorage.getItem("country_id"),
    };
    this.props.loadChequebookSchema(schemaInfo);
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
    this.props.doSaveChequebook(submittedData).then(() => {
      //console.log(this.props.openYourAccountResponseData.openYourAccountData);
    });
    //console.log(submittedData);
  };

  render() {
    //console.log(this.props.dormatAccountResponseData.dormatAccountSchemaData);
    // return null;
    return (
      <div id="content">
        <div className="inner-container">
          <div className="page-header">
            <h2>Request for a chequebook</h2>
          </div>
          <p>Individual Chequebook Request Form</p>
          <div className="row margin-top-30">
            <div className="col-lg-12">
              {this.props.chequebookResponseData.chequebookSchemaData &&
                this.props.chequebookResponseData.chequebookSchemaData
                  .formData && (
                  <CustomForm
                    className="open-account"
                    model={
                      this.props.chequebookResponseData.chequebookSchemaData
                        .formData.data
                    }
                    onSubmit={(model) => {
                      this.onSubmitData(model);
                    }}
                  />
                )}
              {this.props.chequebookResponseData.chequebookData &&
                this.props.chequebookResponseData.chequebookData.error ===
                  "false" && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {/* <strong>
                      {
                        this.props.chequebookResponseData
                .chequebookData.successMsg
                      }
                    </strong> */}
                    Your chequebook request has been submitted successfully.
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
              {this.props.chequebookResponseData.chequebookData &&
                this.props.chequebookResponseData.chequebookData.error ===
                  "true" && (
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    Your cheque book request has been unsuccessfull.
                    {/* <strong>
                      {
                        this.props.chequebookResponseData
                .chequebookData.errorMsg
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

const mapStateToProps = ({ ChequebookReducer }) => {
  return {
    chequebookResponseData: ChequebookReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, { loadChequebookSchema, doSaveChequebook })(
    Chequebook
  )
);
