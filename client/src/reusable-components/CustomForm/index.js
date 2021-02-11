import React, { Component, createRef } from "react";
import Webcam from "react-webcam";
import SignaturePad from "react-signature-canvas";
import { Modal } from "react-bootstrap";

class CustomForm extends Component {
  state = {
    showFileuploadPOI: false,
    showImagePopup: false,
  };
  initialState = {};

  constructor(props) {
    super(props);
    this.webcamRef = createRef();
  }

  //validateInput = (e, error1, error2) => {
  validateInput = (e) => {
    let fieldRef = e.target;
    let fieldName = fieldRef.name;
    let fieldVal = fieldRef.value;
    //console.log(fieldName);

    // if (fieldName === "name") {
    //   if (fieldVal === "") {
    //     fieldRef.setCustomValidity(error1);
    //   } else {
    //     fieldRef.setCustomValidity("");
    //   }
    // }
    // if (fieldName === "accountNumber") {
    //   if (fieldVal === "") {
    //     fieldRef.setCustomValidity(error1);
    //   } else {
    //     fieldRef.setCustomValidity("");
    //   }
    // }
    // Pan number with required
    // if (fieldName === "panNo") {
    //   if (fieldVal === "") {
    //     fieldRef.setCustomValidity(error1);
    //   } else {
    //     var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    //     if (!regex.test(fieldVal)) {
    //       fieldRef.setCustomValidity(error2);
    //     } else {
    //       fieldRef.setCustomValidity("");
    //     }
    //   }
    // }
    //Pan number without required
    if (fieldName === "pannumber1600260014000") {
      var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (fieldVal !== "" && !regex.test(fieldVal)) {
        fieldRef.setCustomValidity("Please enter valid pan number");
      } else {
        fieldRef.setCustomValidity("");
      }
    }
  };

  onFileChange = (e, key) => {
    let formKey = "file-" + key;
    //Creating initial state
    this.initialState[key] = "";
    this.initialState[formKey] = "";

    this.setState({
      [key]: URL.createObjectURL(e.target.files[0]),
    });
    const formData = new FormData();
    formData.append(key, e.target.files[0], e.target.files[0].name);
    this.setState({ [formKey]: formData });
    //console.log(formData);
    if (this.state.showImagePopup) {
      this.showHideImagePopup();
    }
  };

  captureImage = (e, key) => {
    e.preventDefault();
    let formKey = "file-" + key;
    //Creating initial state
    this.initialState[key] = "";
    this.initialState[formKey] = "";
    let capturedImage = this.webcamRef.current.getScreenshot();
    console.log(key);
    console.log(this.webcamRef.current);

    this.setState({
      [key]: capturedImage,
    });
    //console.log(capturedImage);
    const file = this.DataURIToBlob(capturedImage);
    const formData = new FormData();
    formData.append(key, file, "userImage.jpeg");
    this.setState({ [formKey]: formData });
    this.showHideImagePopup();
  };

  DataURIToBlob = (dataURI) => {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };
  //Digital Signature
  sigPad = {};
  clearSignaturePad = (e) => {
    e.preventDefault();
    this.sigPad.clear();
  };
  captureSignature = (e, key) => {
    e.preventDefault();
    let formKey = "file-" + key;
    //Creating initial state
    //this.initialState[key] = "";
    this.initialState[formKey] = "";

    this.setState(
      {
        trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png"),
        //[key]: capturedImage,
      },
      () => {
        const file = this.DataURIToBlob(this.state.trimmedDataURL);
        const formData = new FormData();
        formData.append(key, file, "userSignature.png");
        this.setState({ [formKey]: formData });
      }
    );
    //console.log(capturedImage);
  };

  showHideImagePopup = () => {
    this.setState({ showImagePopup: !this.state.showImagePopup });
  };
  doTogglePOIModal = () => {
    this.setState({ showFileuploadPOI: !this.state.showFileuploadPOI });
  };
  renderColumns = (row) => {
    let columns = row.map((column) => {
      let key = column.key;
      let type = column.type || "text";
      let validations = column.validations || {};
      let label = column.label;
      let name = key;
      let value = this.state[key] || "";
      // let error1 = column.error1 || "Ths field is required";
      // let error2 = column.error2;
      let input = "";
      let output = "";

      if (
        type === "text" ||
        type === "date" ||
        type === "email" ||
        type === "number"
      ) {
        input = (
          <input
            {...validations}
            className="form-control"
            type={type}
            name={name}
            value={value}
            onInvalid={(e) => {
              this.validateInput(e);
              //this.validateInput(e, error1, error2);
            }}
            onChange={(e) => {
              this.onChange(e, key);
              this.validateInput(e);
            }}
          />
        );
      }
      if (type === "digitalSignature") {
        input = (
          <>
            <div className="form-group">
              <div className="signature-body">
                <div className="sig-box">
                  <div>
                    <SignaturePad
                      ref={(ref) => {
                        this.sigPad = ref;
                      }}
                      penColor="#004ca0"
                      backgroundColor="#fff"
                      maxWidth={1.5}
                    />
                  </div>
                  <div>
                    {this.state.trimmedDataURL ? (
                      <img src={this.state.trimmedDataURL} alt="" />
                    ) : null}
                  </div>
                </div>

                <div className="signature-footer">
                  <button
                    type="button"
                    className="btn btn-light btn-space-r"
                    onClick={this.clearSignaturePad}
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => this.captureSignature(e, key)}
                  >
                    Capture
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      }

      if (type === "file") {
        input = (
          <div className="capture-image">
            <label>{label}</label>
            <div className="dropdown custom-data-dropdown">
              <button
                className="btn btn-secondary dropdownToggle"
                type="button"
                onClick={this.showHideImagePopup}
              >
                Upload / Capture Image
              </button>
              <div className="p-image">
                <img
                  src={this.state[key]}
                  style={{ width: "300px", height: "300px" }}
                  alt=""
                />
              </div>
              {this.state.showImagePopup && (
                <div
                  className="dropdown-menu-new no-padding "
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="captured-picture">
                        <Webcam
                          audio={false}
                          ref={this.webcamRef}
                          screenshotFormat="image/jpeg"
                          imageSmoothing={true}
                          width="300px"
                          height="300px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-footer">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="file btn btn-primary">
                          Upload
                          <input
                            {...validations}
                            className="form-control"
                            type={type}
                            name={name}
                            onChange={(e) => {
                              this.onFileChange(e, key);
                            }}
                            value={""}
                            style={{ width: "220px", float: "left" }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <button
                          onClick={(e) => this.captureImage(e, key)}
                          className="btn btn-primary"
                        >
                          Capture photo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }

      if (type === "radio") {
        input = column.options.map((option, index) => {
          let checked = option.value === value;
          return (
            <div
              className="form-check custom-check-radio"
              key={"radio-container-" + index}
            >
              <input
                {...validations}
                className="form-check-input"
                type={type}
                key={option.key}
                name={option.name}
                value={option.value}
                checked={checked}
                onChange={(e) => {
                  this.onChange(e, option.name);
                }}
              />
              <label
                key={"radio-" + key}
                className="form-check-label"
                htmlFor={key}
              >
                {option.label}
              </label>
            </div>
          );
        });
        input = <div className="clearfix w-100">{input}</div>;
      }

      if (type === "select") {
        input = column.options.map((option, index) => {
          //let selected = option.value === value;
          return (
            <option key={option.key} value={option.value}>
              {option.label}
            </option>
          );
        });
        input = (
          <>
            <select
              className="form-control"
              name={key}
              onChange={(e) => {
                this.onChange(e, key);
              }}
              value={value}
              {...validations}
            >
              {input}
            </select>
            {key === "poi" && this.state["file-" + key] && (
              <button
                type="button"
                class="btn text-btn"
                onClick={this.doTogglePOIModal}
              >
                View Image
              </button>
            )}
            {key === "poi" && this.state.showFileuploadPOI === true && (
              <Modal
                size="md"
                show={this.state.showFileuploadPOI}
                onHide={this.doTogglePOIModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{value}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="image-modal">
                    <img src={this.state["file-" + key]} alt="" />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="file btn btn-primary">
                    Upload
                    <input
                      className="form-control"
                      type="file"
                      name={"file-" + key}
                      onChange={(e) => {
                        this.onFileChange(e, "file-" + key);
                      }}
                      value={""}
                    />
                  </div>
                </Modal.Footer>
              </Modal>
            )}
          </>
        );
      }

      if (type === "checkbox") {
        //console.log(validations);
        input = column.options.map((option, index) => {
          let checked = false;
          // Values will be saved in comma seperated format. Checking whether the checkbox needs to be checked or not.
          if (value && value.length > 0) {
            checked = value.indexOf(option.value) > -1 ? true : false;
          }

          return (
            <div
              className="form-check custom-check-radio"
              key={"checkbox-container-" + index}
            >
              <input
                {...validations}
                className="form-check-input"
                type={type}
                key={option.key}
                name={option.name}
                value={option.value}
                checked={checked}
                onChange={(e) => {
                  this.onChange(e, key, "multiple");
                }}
              />
              <label
                key={"checkbox-" + key}
                className="form-check-label"
                htmlFor={key}
              >
                {option.label}
              </label>
            </div>
          );
        });
        input = <div className="clearfix w-100">{input}</div>;
      }

      let allLables = "";
      if (type === "grid") {
        let val = "";

        input = column.gridColumns.map((gridColumn, index) => {
          //console.log(gridColumn);
          val = this.state[gridColumn.key] || "";

          if (index !== column.gridColumns.length - 1) {
            allLables += gridColumn.label + ", ";
          } else {
            allLables += gridColumn.label;
          }

          return (
            <React.Fragment key={gridColumn.key}>
              <br />
              <label htmlFor={gridColumn.label}>{gridColumn.label}</label>
              <input
                {...validations}
                className="form-control"
                type={gridColumn.type}
                name={gridColumn.key}
                value={val}
                onChange={(e) => {
                  this.onChange(e, gridColumn.key);
                }}
              />
            </React.Fragment>
          );
        });
      }

      //Displaying the resultant fields
      if (type === "grid") {
        output = (
          <div className="col-lg-3" key={"col" + key}>
            <label htmlFor={label} key={"l" + key}>
              {label}
            </label>
            <div className="dropdown custom-data-dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="accordion"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {allLables}
              </button>
              <div className="dropdown-menu" aria-labelledby="accordion">
                {input}
              </div>
            </div>
          </div>
        );
      } else if (type === "digitalSignature") {
        output = (
          <div className="col-lg-12" key={key}>
            <div className="form-group">
              <label htmlFor={label} key={"l" + key}>
                {label}
              </label>
              {input}
            </div>
          </div>
        );
      } else {
        output = (
          <div className="col-lg-4" key={key}>
            <div className="form-group">
              <label htmlFor={label} key={"l" + key}>
                {label}
              </label>
              {input}
            </div>
          </div>
        );
      }

      return output;
    });
    return columns;
  };

  renderForm = () => {
    if (this.props.model.length === undefined) {
      return "Data format invalid";
    }
    let model = this.props.model;
    //console.log(model);
    let formUI = model.map((row, index) => {
      return (
        // <React.Fragment key={"row" + index}>
        //   <div className="row">{this.renderColumns(row.columns)}</div>
        //   <hr />
        // </React.Fragment>
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
                {row.groupName}
              </button>
            </h2>
          </div>
          <div
            id={`collapse${index}`}
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              <div className="row">{this.renderColumns(row.columns)}</div>
            </div>
          </div>
        </div>
      );
    });
    return formUI;
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
      //Resetting the form
      this.setState(this.initialState);
      this.setState({ showFileuploadPOI: false });
    }
  };

  onChange = (e, key, type = "single") => {
    if (key === "poi" && e.target.value !== "") {
      this.setState({ showFileuploadPOI: true });
    } else {
      this.setState({ showFileuploadPOI: false });
    }

    //Creating initial state
    this.initialState[key] = "";

    if (type === "single") {
      this.setState({
        [key]: e.target.value,
      });
    } else {
      //Array of values
      let found = this.state[key]
        ? this.state[key].find((d) => d === e.target.value)
        : false;
      if (found) {
        let data = this.state[key].filter((d) => {
          return d !== found;
        });
        this.setState({
          [key]: data,
        });
      } else {
        let existing = this.state[key];
        let data = [e.target.value];
        if (existing) {
          data = [e.target.value, ...existing];
        }
        this.setState({
          [key]: data,
        });
      }
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.defaultValues &&
      nextProps.defaultValues.id !== prevState.id
    ) {
      return {
        ...nextProps.defaultValues,
      };
    }
    return null;
  }

  render() {
    return (
      <div className={this.props.className}>
        <form
          onSubmit={(e) => {
            this.onSubmit(e);
          }}
        >
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div id="accordion" className="accordion">
                    {this.renderForm()}
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CustomForm;
