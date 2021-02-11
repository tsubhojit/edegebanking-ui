import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  COUNTRY_ICON,
  BANK_ICON,
  //ACCOUNT_TYPE,
} from "../../../../app-constant/images";
import {
  loadCreateYourAccountConfiguration,
  createYourAccountConfiguration,
} from "../../../../actions/create-your-account-configuration";

import "./configure-create-your-account.css";

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

  // --------------------------Display grid------------------------------
  displayGrid = (element, groupData) => {
    return (
      <table className="table">
        <caption style={{ captionSide: "top", textAlign: "center" }}>
          Related Data
        </caption>
        <colgroup>
          <col style={{ width: "50%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <tbody>{this.displayGridBody(element, groupData)}</tbody>
      </table>
    );
  };

  displayGridBody = (element, groupData) => {
    let gridBodyContent = element.gridColumns.map(
      (innerElement, innerElementIndex) => {
        return (
          <tr key={`innerElements-${innerElementIndex}`}>
            <td>
              <input
                type="text"
                className="form-control"
                name={`text-${innerElement.key}`}
                value={innerElement.label}
                onChange={(e) => this.changeGridField(e, element, innerElement)}
              />
            </td>
            <td>
              <select
                className="form-control"
                name={`select-${innerElement.type}`}
                value={innerElement.type}
                onChange={(e) => this.changeGridField(e, element, innerElement)}
              >
                <option value="">-Type-</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
                <option value="date">Date</option>
              </select>
            </td>
            <td>
              {innerElementIndex === 0 ? (
                <button
                  type="button"
                  className="btn btn-add"
                  onClick={() =>
                    this.addGridElement(innerElementIndex, element)
                  }
                ></button>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-add"
                    onClick={() =>
                      this.addGridElement(innerElementIndex, element)
                    }
                  ></button>
                  <button
                    type="button"
                    className="btn btn-delete"
                    onClick={() =>
                      this.deleteGridElement(innerElementIndex, element)
                    }
                  ></button>
                </>
              )}
            </td>
          </tr>
        );
      }
    );
    return gridBodyContent;
  };

  changeGridField = (e, currentElement, innerElement) => {
    console.log(innerElement);
    let rand = +new Date();
    let newGroupData = currentElement.gridColumns.map(
      (innerElementFromLoop) => {
        if (
          JSON.stringify(innerElementFromLoop) === JSON.stringify(innerElement)
        ) {
          if (e.target.tagName === "INPUT") {
            innerElementFromLoop.key = "name" + rand;
            innerElementFromLoop.label = e.target.value;
          } else {
            innerElementFromLoop.type = e.target.value;
          }
          return innerElementFromLoop;
        }
        return innerElement;
      }
    );
    this.setState((prevState) => ({}));
  };

  addGridElement = (index, element) => {
    //console.log(groupData);
    let rand = +new Date();
    let columnData = {
      key: "name" + rand,
      label: "",
      type: "",
    };
    element.gridColumns.splice(index + 1, 0, columnData);
    this.setState((prevState) => ({}));
  };
  deleteGridElement = (deleteIndex, element) => {
    element.gridColumns.splice(deleteIndex, 1);
    this.setState((prevState) => ({}));
  };

  // --------------------------Display grid------------------------------

  // ------------------------------ Display Fields in accordion ----------------------------
  displayFields = (groupData) => {
    let groupElements = groupData.columns.map((element, elementIndex) => {
      //console.log(element.validations);
      return (
        <tr key={`elements-${elementIndex}`}>
          <td>
            <input
              type="text"
              className="form-control"
              name={`text-${element.key}`}
              value={element.label}
              onChange={(e) => this.changeField(e, element, groupData)}
            />
          </td>
          <td>
            <select
              className="form-control"
              name={`text-${element.type}`}
              value={element.type}
              onChange={(e) => this.changeField(e, element, groupData)}
            >
              <option value="">-Type-</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
              <option value="checkbox">Checkbox</option>
              <option value="radio">Radio</option>
              <option value="select">Select</option>
              <option value="date">Date</option>
              <option value="file">File</option>
              <option value="grid">Grid</option>
            </select>
          </td>
          <td>
            {element.showHideMultipleText && (
              <textarea
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
            )}
            {element.showHideGrid && this.displayGrid(element, groupData)}
          </td>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              value={
                element.validations !== undefined
                  ? element.validations.required
                  : false
              }
              key={`required-${element.key}`}
              defaultChecked={
                element.validations !== undefined &&
                element.validations.required
                  ? true
                  : ""
              }
              onChange={(e) => {
                this.changeValidationField(e, element, groupData);
              }}
            />
          </td>
          <td>
            {elementIndex === 0 ? (
              <button
                type="button"
                className="btn btn-add"
                onClick={() => this.addCustomElement(elementIndex, groupData)}
              ></button>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-add"
                  onClick={() => this.addCustomElement(elementIndex, groupData)}
                ></button>
                <button
                  type="button"
                  className="btn btn-delete"
                  onClick={() =>
                    this.deleteCustomElement(elementIndex, groupData)
                  }
                ></button>
              </>
            )}
          </td>
        </tr>
      );
    });
    return groupElements;
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
            currentElement.showHideGrid = false;
          } else if (e.target.value === "grid") {
            currentElement.showHideMultipleText = false;
            currentElement.showHideGrid = true;
          } else {
            currentElement.typeOfMultipleText = "";
            currentElement.showHideMultipleText = false;
            currentElement.showHideGrid = false;
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

  //Change Multi valued fields
  changeMultiValuedField = (e, currentElement, groupData) => {
    //console.log(currentElement);
    let newGroupData = groupData.columns.map((element) => {
      if (JSON.stringify(element) === JSON.stringify(currentElement)) {
        //console.log(e.target.tagName);
        if (e.target.tagName === "TEXTAREA") {
          element.actualOptions = e.target.value;
          return element;
        }
      }
      return element;
    });
    this.setState((prevState) => ({}));
  };

  // Change valiadtion field
  changeValidationField = (e, currentElement, groupData) => {
    console.log(currentElement);
    let newGroupData = groupData.columns.map((element) => {
      if (JSON.stringify(element) === JSON.stringify(currentElement)) {
        console.log(e.target.type);
        if (e.target.type === "checkbox") {
          if (currentElement.validations) {
            if (currentElement.validations.required) {
              currentElement.validations = {};
            } else {
              currentElement.validations = { required: true };
            }
          }
          return element;
        }
      }
      return element;
    });
    this.setState((prevState) => ({}));
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

  addCustomElement = (index, groupData) => {
    //console.log(groupData);
    let rand = +new Date();
    let columnData = {
      key: "name" + rand,
      label: "",
      type: "text",
      validations: {},
      showHideGrid: false,
      gridColumns: [{ key: "firstGridElement", label: "", type: "text" }],
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

  // ------------------------ Display Fields in accordion -----------------------

  // -------------------------- Display accordion ------------------
  generateAccordion = (groupingData) => {
    this.groupElement = groupingData.map((group, index) => {
      return (
        <div className="card" key={`Grouping-${index}`}>
          <div className="card-header">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left float-left"
                data-toggle="collapse"
                data-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {group.groupName}
              </button>
            </h2>
            <input
              className="form-control edit-title"
              type="text"
              value={group.groupName}
              onChange={(e) => this.onChangeGroup(e, group)}
            />

            {index === 0 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.addGroupingContent(index)}
              >
                <span className="glyphicon glyphicon-plus"></span>
              </button>
            ) : (
              <button
                type="button"
                className="btn remove-btn"
                onClick={() => this.deleteGroupingContent(index)}
              ></button>
            )}
          </div>

          <div
            id={`collapse${index}`}
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              <div className="clean-table">
                <table className="table">
                  <colgroup>
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "40%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "10%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Label Name</th>
                      <th>Field Type</th>
                      <th>Options</th>
                      <th>is Required?</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>{this.displayFields(group)}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return this.groupElement;
  };
  onChangeGroup = (e, group) => {
    //console.log(group);
    group.groupName = e.target.value;
    this.setState((prevState) => ({}));
  };

  addGroupingContent = (index) => {
    let groupData = {
      groupName: "Group Name",
      columns: [
        {
          key: "name" + index,
          label: "",
          type: "text",
          validation: "",
          showHideGrid: false,
          gridColumns: [{ key: "firstGridElement", label: "", type: "text" }],
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
  // ---------------------- Display accordion ----------------------------

  onSubmitData = (e) => {
    //console.log("heelo");
    e.preventDefault();
    let submittedObject = {
      country: this.state.selectedCountry,
      bank: this.state.selectedBank,
      groupingData: this.state.groupingData,
    };
    //console.log(submittedObject);
    this.props.createYourAccountConfiguration(submittedObject).then(() => {
      console.log(
        this.props.loadCreateYourAccountConfigurationData
          .createYourAccountConfigResponseData
      );
    });
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
          <div className="page-header">
            <h2>Configure your account</h2>
          </div>
          <div className="row margin-top-30">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4 boredr-right">
                      <div className="select-container country-selection">
                        <figure>
                          <img src={COUNTRY_ICON} alt="country" />
                        </figure>
                        <div className="form-group">
                          <label>Select Country</label>
                          <select
                            className="form-control"
                            name="country"
                            onChange={this.onChangeCountry}
                          >
                            <option value="">Select</option>
                            {distinctCounties.map((country) => {
                              return (
                                <option
                                  value={country}
                                  key={`country-${country}`}
                                >
                                  {country}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 boredr-right">
                      <div className="select-container bank-selection">
                        <figure>
                          <img src={BANK_ICON} alt="bank" />
                        </figure>
                        <div className="form-group">
                          <label>Select Bank</label>
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
                    </div>
                    {/* <div className="col-lg-4">
                      <div className="select-container account-type-selection">
                        <figure>
                          <img src={ACCOUNT_TYPE} alt="Account Type" />
                        </figure>
                        <div className="form-group">
                          <label forName="Account type">
                            Select Account Type
                          </label>
                          <select className="form-control">
                            <option value="">Single</option>
                            <option value="">Joint</option>
                          </select>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {this.state.groupingData.length > 0 && (
                <form
                  onSubmit={(e) => {
                    this.onSubmitData(e);
                  }}
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <div id="accordion" className="accordion">
                            {this.generateAccordion(this.state.groupingData)}
                          </div>
                        </div>
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
                      <div className="row">
                        <div className="col-lg-12">
                          {this.props.loadCreateYourAccountConfigurationData
                            .createYourAccountConfigResponseData &&
                            this.props.loadCreateYourAccountConfigurationData
                              .createYourAccountConfigResponseData.error ===
                              "false" && (
                              <div
                                className="alert alert-success alert-dismissible fade show"
                                role="alert"
                                style={{ margin: "15px" }}
                              >
                                <strong>
                                  {
                                    this.props
                                      .loadCreateYourAccountConfigurationData
                                      .createYourAccountConfigResponseData
                                      .errorMsg
                                  }
                                </strong>
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
                          {this.props.loadCreateYourAccountConfigurationData
                            .createYourAccountConfigResponseData &&
                            this.props.loadCreateYourAccountConfigurationData
                              .createYourAccountConfigResponseData.error ===
                              "true" && (
                              <div
                                className="alert alert-warning alert-dismissible fade show"
                                role="alert"
                                style={{ margin: "15px" }}
                              >
                                <strong>
                                  {
                                    this.props
                                      .loadCreateYourAccountConfigurationData
                                      .createYourAccountConfigResponseData
                                      .errorMsg
                                  }
                                </strong>
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
                </form>
              )}
            </div>
          </div>
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
