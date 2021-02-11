import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loadCreateYourAccountConfiguration,
  createYourAccountConfiguration,
} from "../../../../actions/create-your-account-configuration";

//import "./open-your-account.css";

class ConfigureCreateYourAccount extends Component {
  state = {
    // allData: [
    //   {
    //     country: "IND",
    //     bank: "ICICI",
    //     groupingData: [
    //       {
    //         groupName: "Personal Information",
    //         columns: [
    //           {
    //             key: "name",
    //             label: "Name",
    //             type: "text",
    //             validations: "",
    //             showHideMultipleText: false,
    //             typeOfMultipleText: "",
    //             options: [],
    //             actualOptions: "",
    //           },
    //           {
    //             key: "age",
    //             label: "Age",
    //             type: "number",
    //             validations: "",
    //             showHideMultipleText: false,
    //             typeOfMultipleText: "",
    //             options: [],
    //             actualOptions: "",
    //           },
    //         ],
    //       },
    //       {
    //         groupName: "Account Information",
    //         columns: [
    //           {
    //             key: "accountInformation",
    //             label: "Name",
    //             type: "text",
    //             validations: "",
    //             showHideMultipleText: false,
    //             typeOfMultipleText: "",
    //             options: [],
    //             actualOptions: "",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     country: "US",
    //     bank: "HDFC",
    //     groupingData: [
    //       {
    //         groupName: "Personal Information2",
    //         columns: [
    //           {
    //             key: "name",
    //             label: "Name",
    //             type: "text",
    //             validations: "",
    //             showHideMultipleText: false,
    //             typeOfMultipleText: "",
    //             options: [],
    //             actualOptions: "",
    //           },
    //           {
    //             key: "age",
    //             label: "Age",
    //             type: "number",
    //             validations: "",
    //             showHideMultipleText: false,
    //             typeOfMultipleText: "",
    //             options: [],
    //             actualOptions: "",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
    banks: [],
    selectedCountry: "",
    selectedBank: "",
    allData: [],
    groupingData: [],
  };

  componentDidMount() {
    this.props.loadCreateYourAccountConfiguration().then(() => {
      let receivedObject = this.props.loadCreateYourAccountConfigurationData
        .createYourAccountConfigData;
      //console.log(receivedObject.allData.length);
      if (receivedObject.allData.length > 0) {
        this.setState({
          allData: receivedObject.allData,
        });
      }
    });
  }

  addGroupingContent = (index) => {
    let groupData = {
      groupName: "Group Name",
      columns: [
        {
          key: "name" + index,
          label: "",
          type: "text",
          validation: "",
        },
      ],
    };
    this.setState((prevState) => ({
      groupingData: [...prevState.groupingData, groupData],
    }));
  };
  deleteGroupingContent = (index) => {
    this.setState({
      groupingData: this.state.groupingData.filter(
        (group, groupIndex) => index != groupIndex
      ),
    });
  };

  addCustomElement = (index, groupData) => {
    //console.log(groupData);
    let rand = +new Date();
    let columnData = {
      key: "name" + rand,
      label: "",
      type: "text",
      validation: "",
    };
    //groupData.columns.push(columnData);
    groupData.columns.splice(index + 1, 0, columnData);
    // calling setstate to update the state
    this.setState((prevState) => ({}));
  };
  deleteCustomElement = (deleteIndex, groupData) => {
    //console.log(groupData, deleteIndex);
    groupData.columns.splice(deleteIndex, 1);
    this.setState((prevState) => ({}));
  };

  onChangeGroup = (e, group) => {
    //console.log(group);
    group.groupName = e.target.value;
    this.setState((prevState) => ({}));
  };

  generateAccordion = (groupingData) => {
    this.groupElement = groupingData.map((group, index) => {
      return (
        <div className="card" key={`Grouping-${index}`}>
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {group.groupName}
              </button>
              <input
                type="text"
                value={group.groupName}
                onChange={(e) => this.onChangeGroup(e, group)}
              />
            </h5>

            {index === 0 ? (
              <button
                type="button"
                className="btn btn-primary"
                style={{ float: "right" }}
                onClick={() => this.addGroupingContent(index)}
              >
                <span className="glyphicon glyphicon-plus"></span>
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                style={{ float: "right" }}
                onClick={() => this.deleteGroupingContent(index)}
              >
                <span className="glyphicon glyphicon-minus"></span>
              </button>
            )}
          </div>

          <div
            id={`collapse${index}`}
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">{this.displayFields(group)}</div>
          </div>
        </div>
      );
    });
    return this.groupElement;
  };
  // Creating options array
  createOptions = (e, currentElement, groupData) => {
    groupData.columns.map((element) => {
      if (JSON.stringify(element) === JSON.stringify(currentElement)) {
        let actualOptionsArr = element.actualOptions.split(",");
        element.options = [];
        //console.log(actualOptionsArr);
        if (element.type === "select") {
          let optionObj = { key: "select", label: "Select", value: "" };
          element.options.push(optionObj);
          actualOptionsArr.map((item) => {
            element.options.push({ key: item, label: item, value: item });
          });
          return element;
        }
        if (element.type === "radio") {
          actualOptionsArr.map((item) => {
            element.options.push({
              key: item,
              label: item,
              name: element.key,
              value: item,
            });
          });
          return element;
        }
        if (element.type === "checkbox") {
          actualOptionsArr.map((item) => {
            element.options.push({ key: item, label: item, value: item });
          });
          return element;
        }
      }
      return element;
    });
    this.setState((prevState) => ({}));
  };

  //Change Multi valued fields
  changeMultiValuedField = (e, currentElement, groupData) => {
    //console.log(currentElement);
    let newGroupData = groupData.columns.map((element) => {
      if (JSON.stringify(element) === JSON.stringify(currentElement)) {
        if (e.target.tagName === "INPUT") {
          element.actualOptions = e.target.value;
          return element;
        }
      }
      return element;
    });
    this.setState((prevState) => ({}));
  };

  //Change General Fields
  changeField = (e, currentElement, groupData) => {
    //console.log(currentElement);
    let newGroupData = groupData.columns.map((element) => {
      if (JSON.stringify(element) === JSON.stringify(currentElement)) {
        let rand = +new Date();
        if (e.target.tagName === "INPUT") {
          element.key = e.target.value.toLowerCase().replace(/\s/g, "") + rand;
          element.label = e.target.value;
          return element;
        } else if (e.target.tagName === "SELECT") {
          element.type = e.target.value;
          if (
            e.target.value === "checkbox" ||
            e.target.value === "radio" ||
            e.target.value === "select"
          ) {
            currentElement.typeOfMultipleText = e.target.value;
            currentElement.showHideMultipleText = true;
          } else {
            currentElement.typeOfMultipleText = "";
            currentElement.showHideMultipleText = false;
          }
          return element;
        }
      }
      return element;
    });
    // calling setstate to update the state
    this.setState((prevState) => ({}));

    //console.log(this.state);
  };

  // Display all fileds
  displayFields = (groupData) => {
    let groupElements = groupData.columns.map((element, elementIndex) => {
      //console.log(element);
      return (
        <div className="row" key={`elements-${elementIndex}`}>
          <div className="col-lg-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name={`text-${element.key}`}
                value={element.label}
                onChange={(e) => this.changeField(e, element, groupData)}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <select
                className="form-control"
                name={`text-${element.type}`}
                value={element.type}
                onChange={(e) => this.changeField(e, element, groupData)}
              >
                <option value="">-Type-</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="checkbox">Checkbox</option>
                <option value="radio">Radio</option>
                <option value="select">Select</option>
                <option value="date">Date</option>
                <option value="file">File</option>
              </select>
            </div>
          </div>
          {element.showHideMultipleText && (
            <div className="col-lg-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name={`multi-${element.key}`}
                  value={element.actualOptions}
                  onChange={(e) =>
                    this.changeMultiValuedField(e, element, groupData)
                  }
                  onBlur={(e) => {
                    this.createOptions(e, element, groupData);
                  }}
                />
              </div>
            </div>
          )}
          {elementIndex === 0 ? (
            <div className="col-lg-3">
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ float: "right" }}
                  onClick={() => this.addCustomElement(elementIndex, groupData)}
                >
                  <span className="glyphicon glyphicon-plus"></span>
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="col-lg-3">
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ float: "right" }}
                    onClick={() =>
                      this.addCustomElement(elementIndex, groupData)
                    }
                  >
                    <span className="glyphicon glyphicon-plus"></span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ float: "right", marginRight: "5px" }}
                    onClick={() =>
                      this.deleteCustomElement(elementIndex, groupData)
                    }
                  >
                    <span className="glyphicon glyphicon-minus"></span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      );
    });
    return groupElements;
  };

  onSubmitData = (e) => {
    //console.log("heelo");
    e.preventDefault();
    let submittedObject = {
      country: this.state.selectedCountry,
      bank: this.state.selectedBank,
      groupingData: this.state.groupingData,
    };
    //console.log(submittedObject);
    this.props.createYourAccountConfiguration(submittedObject);
  };

  onChangeCountry = (event) => {
    this.setState({
      groupingData: [],
      banks: [],
      selectedBank: "",
    });
    //console.log(country.target.value);
    let bankNames = new Array();

    let selectedCountry = event.target.value;
    this.state.allData.forEach(function (item) {
      if (item.country === selectedCountry) {
        bankNames.push(item.bank);
      }
    });
    let distinctBanks = [...new Set(bankNames)];
    this.setState({
      banks: distinctBanks,
      selectedCountry,
    });
    // console.log(
    //   "this.state.selecetdBank in country " + this.state.selecetdBank
    // );
  };

  onChangeBank = (event) => {
    let selectedBank = event.target.value;
    let selectedGroupingData = [];
    let selectedCountry = this.state.selectedCountry;
    this.state.allData.forEach(function (item) {
      if (item.bank === selectedBank && item.country === selectedCountry) {
        selectedGroupingData = item.groupingData;
      }
    });
    this.setState({
      groupingData: selectedGroupingData,
      selectedBank: selectedBank,
    });
    //console.log("this.state.selecetdBank in bank " + this.state.selecetdBank);
  };

  render() {
    // console.log("AllData");
    // console.log(this.state);

    if (this.state.allData.length < 0) {
      return (
        <div id="content">
          <div className="inner-container">No Record Found</div>
        </div>
      );
    }

    let countries = new Array();
    this.state.allData.forEach(function (item) {
      countries.push(item.country);
    });
    let distinctCounties = [...new Set(countries)];

    return (
      <div id="content">
        <div className="inner-container">
          <div className="row" style={{ marginBottom: "10px" }}>
            <div className="col-lg-2">Country:</div>
            <div className="col-lg-4">
              <select
                className="form-control"
                name="country"
                onChange={this.onChangeCountry}
              >
                <option value="">Select</option>
                {distinctCounties.map((country) => {
                  return (
                    <option value={country} key={`country-${country}`}>
                      {country}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-lg-2">Bank Name:</div>
            <div className="col-lg-4">
              <select
                className="form-control"
                name="bank"
                onChange={this.onChangeBank}
                value={this.state.selecetdBank}
              >
                <option value="">Select</option>
                {this.state.banks.map((bank) => {
                  return (
                    <option value={bank} key={`bank-${bank}`}>
                      {bank}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              this.onSubmitData(e);
            }}
          >
            {this.state.groupingData.length > 0 && (
              <div className="card">
                <div className="card-body">
                  <div id="accordion">
                    {this.generateAccordion(this.state.groupingData)}
                  </div>
                </div>
                <div className="card-footer text-align-right">
                  <div className="row">
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-secondary float-right"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ createYourAccountConfigationReducer }) => {
  return {
    loadCreateYourAccountConfigurationData: createYourAccountConfigationReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    loadCreateYourAccountConfiguration,
    createYourAccountConfiguration,
  })(ConfigureCreateYourAccount)
);
