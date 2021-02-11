import React, { Component } from "react";

class CustomForm extends Component {
  state = {};
  initialState = {};

  constructor(props) {
    super(props);
  }

  validateInput = (e, error1, error2) => {
    let fieldRef = e.target;
    let fieldName = fieldRef.name;
    let fieldVal = fieldRef.value;
    //console.log(fieldName);

    if (fieldName === "name") {
      if (fieldVal === "") {
        fieldRef.setCustomValidity(error1);
      } else {
        fieldRef.setCustomValidity("");
      }
    }
    if (fieldName === "accountNumber") {
      if (fieldVal === "") {
        fieldRef.setCustomValidity(error1);
      } else {
        fieldRef.setCustomValidity("");
      }
    }
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
    if (fieldName === "panNo") {
      var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (fieldVal !== "" && !regex.test(fieldVal)) {
        fieldRef.setCustomValidity(error2);
      } else {
        fieldRef.setCustomValidity("");
      }
    }
  };

  onFileChange = (e, key) => {
    //Creating initial state
    // this.initialState[key] = "";
    // this.setState({
    //   [key]: e.target.files[0],
    // });
  };

  onFileUpload = (e, key) => {
    e.preventDefault();
    //const formData = new FormData();

    // Update the formData object
    // formData.append(
    //   "myFile",
    //   this.state.selectedFile,
    //   this.state.selectedFile.name
    // );
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
            // onInvalid={(e) => {
            //   this.validateInput(e, error1, error2);
            // }}
            onChange={(e) => {
              this.onChange(e, key);
              //this.validateInput(e, error1, error2);
            }}
          />
        );
      }

      if (type === "file") {
        input = (
          <div>
            <input
              {...validations}
              className="form-control"
              type={type}
              name={name}
              value={value}
              onChange={(e) => {
                this.onFileChange(e, key);
              }}
              style={{ width: "220px", float: "left" }}
            />
            <button
              onClick={(e) => {
                this.onFileUpload(e, key);
              }}
              style={{ float: "left" }}
            >
              Upload!
            </button>
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
        );
      }

      if (type === "checkbox") {
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
      } else {
        output = (
          <div className="col-lg-3" key={key}>
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
        <React.Fragment key={"row" + index}>
          <div className="row">{this.renderColumns(row.columns)}</div>
          <hr />
        </React.Fragment>
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
    }
  };

  onChange = (e, key, type = "single") => {
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
            <div className="card-body">{this.renderForm()}</div>
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
