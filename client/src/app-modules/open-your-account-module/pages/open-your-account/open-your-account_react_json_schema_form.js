import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { openYourAccount } from "../../../../actions/open-your-account";
import Form from "@rjsf/core";
//import "./open-your-account.css";

class OpenYourAccount extends Component {
  state = {
    schema: {
      // title: "Todo",
      type: "object",
      //required: ["typeOfAccount", "phoneUS"],
      properties: {
        title: {
          type: "string",
          title: "Title",
          default: "A new task",
          required: true,
        },
        done: { type: "boolean", title: "Done?", default: false },
        age: { type: "number", title: "Age" },
        typeOfAccount: {
          title: "Account Type",
          type: "number",
          enum: [1, 2],
          enumNames: ["test", "Savings"],
        },
        addressLine: {
          title: "Address Line",
          type: "array",
          items: {
            type: "string",
          },
        },
        selectMultiple: {
          type: "array",
          title: "A multiple-choice list",
          items: {
            type: "string",
            enum: ["foo", "bar", "fuzz", "qux"],
          },
          uniqueItems: true,
        },
        gender: {
          title: "Gender",
          type: "boolean",
          enum: ["male", "female"],
          enumNames: ["Male", "Female"],
        },
        photo: {
          title: "Passport Photo",
          type: "string",
          format: "data-url",
        },
        phoneUS: {
          title: "Phone US",
          type: "string",
          //format: "phone-us",
          pattern: "^\\d*$",
          required: true,
        },
      },
      // additionalProperties: {
      //   type: "number",
      //   enum: [1, 2, 3],
      // },
    },
    // formData: {
    //   title: "First task",
    //   done: true,
    // },
    uiSchema: {
      gender: {
        "ui:widget": "radio",
      },
      // photo: {
      //   "ui:options": { accept: ".pdf" },
      // },
    },
    // customFormats: {
    //   "phone-us": /\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/,
    // },
  };

  validate = (formData, errors) => {
    //if (formData.pass1 !== formData.pass2) {
    // errors.pass2.addError("Passwords don't match");
    //}
    //return errors;
    console.log(formData);
    if (formData.typeOfAccount === undefined) {
      errors.typeOfAccount.addError("Select Type of account");
    }
    if (formData.phoneUS === undefined) {
      errors.phoneUS.addError("Enter Phone");
    }
    return errors;
  };

  onSubmitData = (formData) => {
    console.log(formData);
    console.log("Form Submitted");
  };

  CustomFieldTemplate = (props) => {
    const {
      id,
      classNames,
      label,
      help,
      required,
      description,
      errors,
      children,
    } = props;
    return <div>Test</div>;
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
              <Form
                schema={this.state.schema}
                onChange={console.log("changed")}
                onSubmit={this.onSubmitData}
                onError={console.log("errors")}
                //formData={this.state.formData}
                uiSchema={this.state.uiSchema}
                validate={this.validate}
                //customFormats={this.state.customFormats}
                showErrorList={false}
                enctype="multipart/form-data"
                fields={this.MyCustomField}
              />
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
