import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { openYourAccount } from "../../../../actions/open-your-account";
import "./open-your-account.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import _ from "lodash";

const AccountSchema = Yup.object().shape({
  accountNumber: Yup.string().required("Account Number is required"),
});

const TextField = (props) => {
  const { name, label, placeholder, ...rest } = props;
  return (
    <>
      {label && <label for={name}>{label}</label>}
      {/* <Field
            type="text"
            name="accountNumber"
            placeholder="Enter Account Number"
            className={`form-control ${
              touched.accountNumber && errors.accountNumber
                ? "is-invalid"
                : ""
            }`}
          /> */}
      <Field
        className="form-control"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder || ""}
        {...rest}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
      />
    </>
  );
};

class OpenYourAccount extends Component {
  state = {
    isFormValid: true,
    showMsg: false,
    showError: false,
    errorMsg: "",
    successMsg: "",
    accountNumber: "",
    formSchema: {
      fieldsInformation: [
        {
          category: "Personal Information",
          fields: [
            {
              type: "text",
              label: "Name",
              required: true,
              fieldName: "name",
            },
            {
              type: "text",
              label: "Father Name",
              required: true,
              fieldName: "fatherName",
            },
          ],
        },
        {
          category: "Identity Proof",
          fields: [
            {
              type: "text",
              label: "Account Information",
              required: true,
              fieldName: "accountInformation",
            },
            {
              type: "text",
              label: "PAN",
              fieldName: "pan",
            },
            {
              type: "text",
              label: "Aadhar Card No",
              fieldName: "aadhar",
            },
          ],
        },
      ],
    },
  };

  // componentDidMount() {
  //   console.log("component loaded");
  // }

  generateCategories = (allCategories) => {
    return _.each(allCategories, function (allCategory) {
      return <div>Test</div>;
    });
  };

  generateCategory = (category) => {
    // return(
    //     <div className="row">
    //       {
    //         this.generateCategory()
    //       }
    //     </div>
    // )
  };

  generateFields = (field) => {
    // return(
    //   <div className="row">
    //       {
    //         this.generateCategory()
    //       }
    //    </div>
    // )
  };

  generateForm = () => {
    let fieldsMetaData = _.map(this.state.formSchema);
    return _.each(fieldsMetaData, function (dataCategories) {
      console.log(dataCategories);
      return this.generateCategories(dataCategories);
      // return _.each(dataCategories, function (dataCategory) {

      //   //Data category
      //   // return (

      //   //     _.each(dataCategory.fields, function (field){" "}
      //   //     {
      //   //       // return (
      //   //       //   //Each fields
      //   //       //   <div className="col-lg-4">
      //   //       //     <div className="form-group">
      //   //       //       if (field.type === "text") {
      //   //       //       }
      //   //       //       </div>
      //   //       //     </div>
      //   //       //     //console.log(field);
      //   //       // )
      //   //     }
      //   //     )

      //   // );
      // });
    });
    //return <div>{result}</div>;
  };

  render() {
    return (
      <div id="content">
        <div className="inner-container">
          <div className="page-header">
            <h2>Open an account with us</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            hendrerit urna quis ultricies commodo. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aliquam convallis vel arcu et scelerisque. Quisque vitae est a lacus
            placerat fermentum vitae id dolor. Morbi non orci quam. Donec in
            semper odio.
          </p>
          <div className="row margin-top-30">
            <div className="col-lg-12">
              <Formik
                initialValues={this.state}
                validationSchema={AccountSchema}
                onSubmit={({ setSubmitting }) => {
                  alert("Form is validated! Submitting the form...");
                  //setSubmitting(false);
                }}
              >
                {({ touched, errors, isSubmitting }) => (
                  <Form>
                    <div className="card">
                      <div className="card-body">{this.generateForm()}</div>
                      <div className="card-footer text-align-right">
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-secondary float-right"
                              disabled={isSubmitting}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ openYourAccountReducer }) => {
  return {
    openYourAccountResponseData: openYourAccountReducer.openYourAccountData,
  };
};

export default withRouter(
  connect(mapStateToProps, { openYourAccount })(OpenYourAccount)
);
