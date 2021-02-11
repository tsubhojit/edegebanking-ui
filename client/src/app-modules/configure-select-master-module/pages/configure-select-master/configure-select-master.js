import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { COUNTRY_ICON } from "../../../../app-constant/images";
import {
  loadSelectMasterConfiguration,
  saveSelectMasterConfiguration,
} from "../../../../actions/configure-select-master";

import "./configure-select-master.css";

class ConfigureSelectMaster extends Component {
  state = {
    selectedCountry: "",
    allData: [],
    groupingData: [],
  };

  componentDidMount() {
    this.props.loadSelectMasterConfiguration().then(() => {
      let receivedObject = this.props.selectMasterReducerData
        .loadSelectMasterData;
      //console.log(receivedObject.dropDownData);
      if (receivedObject.dropDownData.length > 0) {
        this.setState({
          allData: receivedObject.dropDownData,
        });
      }
    });
  }

  // ------------------------------ Display Fields in accordion ----------------------------
  displayFields = (groupData) => {
    let groupElements = groupData.columns.map((element, elementIndex) => {
      //console.log(element);
      return (
        <tr key={`elements-${elementIndex}`}>
          <td>
            {element.readOnly === "true" ? (
              <input
                type="text"
                className="form-control"
                name={`text-${element.key}`}
                value={element.value}
                readOnly
              />
            ) : (
              <input
                type="text"
                className="form-control"
                name={`text-${element.key}`}
                value={element.value}
                onChange={(e) => this.changeField(e, element, groupData)}
              />
            )}
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
                {element.readOnly !== "true" && (
                  <button
                    type="button"
                    className="btn btn-delete"
                    onClick={() =>
                      this.deleteCustomElement(elementIndex, groupData)
                    }
                  ></button>
                )}
                {/* <button
                  type="button"
                  className="btn btn-delete"
                  onClick={() =>
                    this.deleteCustomElement(elementIndex, groupData)
                  }
                ></button> */}
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
    groupData.columns.map((element) => {
      if (JSON.stringify(element) === JSON.stringify(currentElement)) {
        let rand = +new Date();
        if (e.target.tagName === "INPUT") {
          element.key = e.target.value.toLowerCase().replace(/\s/g, "") + rand;
          element.value = e.target.value;
          return element;
        }
      }
      return element;
    });
    // calling setstate to update the state
    this.setState((prevState) => ({}));
  };

  addCustomElement = (index, groupData) => {
    //console.log(groupData);
    let rand = +new Date();
    let columnData = {
      key: "name" + rand,
      value: "",
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
      //console.log(group);
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
                onClick={(e) => {
                  e.preventDefault();
                }}
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
                className="btn add-new-btn float-right"
                onClick={(e) => this.addGroupingContent(e, index)}
              >
                Add New Section
              </button>
            ) : (
              <button
                type="button"
                className="btn remove-btn"
                onClick={(e) => this.deleteGroupingContent(e, index)}
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
                    <col style={{ width: "50%" }} />
                    <col style={{ width: "50%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Values</th>
                      <th>Options</th>
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

  addGroupingContent = (e, index) => {
    e.preventDefault();
    let groupData = {
      groupName: "Group Name",
      columns: [
        {
          key: "name" + index,
          value: "",
        },
      ],
    };
    this.setState((prevState) => ({
      groupingData: [...prevState.groupingData, groupData],
    }));
  };

  deleteGroupingContent = (e, index) => {
    e.preventDefault();
    this.setState({
      groupingData: this.state.groupingData.filter(
        (group, groupIndex) => index !== groupIndex
      ),
    });
  };
  // ---------------------- Display accordion ----------------------------

  onSubmitData = (e) => {
    //console.log("heelo");
    e.preventDefault();
    let submittedObject = {
      country: this.state.selectedCountry,
      groupingData: this.state.groupingData,
    };
    //console.log(submittedObject);
    this.props.saveSelectMasterConfiguration(submittedObject);
    // this.props.saveSelectMasterConfiguration(submittedObject).then(() => {
    //   // console.log(
    //   //   this.props.selectMasterReducerData.saveSelectMasterResponse.error
    //   // );
    //   // console.log(
    //   //   this.props.selectMasterReducerData.saveSelectMasterResponse.errorMsg
    //   // );
    // });
  };

  onChangeCountry = (event) => {
    this.setState({
      groupingData: [],
    });

    let selectedCountry = event.target.value;
    let selectedGroupingData = [];
    this.state.allData.forEach(function (item) {
      if (item.country === selectedCountry) {
        selectedGroupingData = item.groupingData;
      }
    });

    this.setState({
      groupingData: selectedGroupingData,
      selectedCountry,
    });
  };

  render() {
    if (this.state.allData.length < 0) {
      return (
        <div id="content">
          <div className="inner-container">No Record Found</div>
        </div>
      );
    }

    let countries = [];
    this.state.allData.forEach(function (item) {
      countries.push(item.country);
    });

    return (
      <div id="content">
        <div className="inner-container">
          <div className="page-header">
            <h2>Configure Master Data</h2>
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
                            {countries.map((country) => {
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
                          {this.props.selectMasterReducerData
                            .saveSelectMasterResponse &&
                            this.props.selectMasterReducerData
                              .saveSelectMasterResponse.error === "false" && (
                              <div
                                className="alert alert-success alert-dismissible fade show"
                                role="alert"
                                style={{ margin: "15px" }}
                              >
                                Master configuration data has been submitted
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
                          {/* {this.props.loadCreateYourAccountConfigurationData
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
                            )} */}
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

const mapStateToProps = (props) => {
  // console.log("map state to props");
  //console.log(props);
  return {
    selectMasterReducerData: props.selectMasterReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    loadSelectMasterConfiguration,
    saveSelectMasterConfiguration,
  })(ConfigureSelectMaster)
);
