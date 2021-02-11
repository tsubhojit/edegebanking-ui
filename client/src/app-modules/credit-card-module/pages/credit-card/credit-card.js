import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loadCreditCardSchema,
  doSaveCreditCard,
} from "../../../../actions/credit-card";
import CustomForm from "../../../../reusable-components/CustomForm";

class CreditCard extends Component {
  state = {};

  componentDidMount() {
    let schemaInfo = {
      bank_id: sessionStorage.getItem("bank_id"),
      country_id: sessionStorage.getItem("country_id"),
    };
    this.props.loadCreditCardSchema(schemaInfo);
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
    this.props.doSaveCreditCard(submittedData).then(() => {
      //console.log(this.props.openYourAccountResponseData.openYourAccountData);
    });
    //console.log(submittedData);
  };

  render() {
    //console.log(this.props.creditCardResponseData.creditCardSchemaData);
    // return null;
    return (
      <div id="content">
        <div className="inner-container">
          <div className="page-header">
            <h2>Request a credit card</h2>
          </div>
          <p>Individual Credit Card Request Form</p>
          <div className="row margin-top-30">
            <div className="col-lg-12">
              {this.props.creditCardResponseData.creditCardSchemaData &&
                this.props.creditCardResponseData.creditCardSchemaData
                  .formData && (
                  <CustomForm
                    className="open-account"
                    model={
                      this.props.creditCardResponseData.creditCardSchemaData
                        .formData.data
                    }
                    onSubmit={(model) => {
                      this.onSubmitData(model);
                    }}
                  />
                )}
              {this.props.creditCardResponseData.creditCardData &&
                this.props.creditCardResponseData.creditCardData.error ===
                  "false" && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {/* <strong>
                      {
                        this.props.creditCardResponseData
                .creditCardSchemaData.successMsg
                      }
                    </strong> */}
                    Your credit card validation request has been submitted
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
              {this.props.creditCardResponseData.creditCardData &&
                this.props.creditCardResponseData.creditCardData.error ===
                  "true" && (
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    Your credit card validation request has been unsuccessfull.
                    {/* <strong>
                      {
                        this.props.creditCardResponseData
                .creditCardSchemaData.errorMsg
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

const mapStateToProps = ({ CreditCardReducer }) => {
  return {
    creditCardResponseData: CreditCardReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, { loadCreditCardSchema, doSaveCreditCard })(
    CreditCard
  )
);
