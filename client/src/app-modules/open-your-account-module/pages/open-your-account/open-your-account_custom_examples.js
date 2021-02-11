import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { openYourAccount } from "../../../../actions/open-your-account";
import CustomForm from "../../../../reusable-components/CustomForm";

//import "./open-your-account.css";

class OpenYourAccount extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "a",
        age: 25,
        qualification: "B.Tech",
        rating: 3,
        city: "kerala",
        skills: ["reactjs", "angular", "vuejs"],
        gender: "male",
        accountNumber: "1234567890",
        panNo: "AODPN8491E",
        adhaar: "2345 1234 4567 1111",
      },
      {
        id: 2,
        name: "b",
        age: 27,
        qualification: "B.E",
        rating: 1,
        city: "mumbai",
        skills: ["java", "springboot"],
        gender: "female",
        accountNumber: "2223456789",
        panNo: "AWEPN8491E",
        adhaar: "0000 1234 4567 1111",
      },
      {
        id: 3,
        name: "c",
        age: 32,
        qualification: "B.Com",
        rating: 2,
        city: "kolkata",
        skills: ["nodejs"],
        gender: "male",
        accountNumber: "2223433789",
        panNo: "CCCPN8491E",
        adhaar: "0000 1234 4567 4444",
      },
    ],
    formMetaData: [
      {
        columns: [
          { key: "name", label: "Name", props: { required: true } },
          { key: "age", label: "Age", type: "number" },
          { key: "dob", label: "Date of Birth", type: "date" },
          {
            key: "rating",
            label: "Rating",
            type: "number",
            props: { min: 0, max: 5 },
          },
          {
            key: "qualification",
            label: "Qualification",
          },
          {
            key: "gender",
            label: "Gender",
            type: "radio",
            options: [
              { key: "male", label: "Male", name: "gender", value: "male" },
              {
                key: "female",
                label: "Female",
                name: "gender",
                value: "female",
              },
            ],
          },
          {
            key: "city",
            label: "City",
            type: "select",
            options: [
              { key: "select", label: "Select", value: "" },
              { key: "kolkata", label: "Kolkata", value: "kolkata" },
              { key: "mumbai", label: "Mumbai", value: "mumbai" },
              { key: "kerala", label: "Kerala", value: "kerala" },
            ],
          },
          {
            key: "skills",
            label: "Skills",
            type: "checkbox",
            options: [
              { key: "reactjs", label: "React Js", value: "reactjs" },
              { key: "angular", label: "Angular", value: "angular" },
              { key: "vuejs", label: "Vue Js", value: "vuejs" },
              { key: "java", label: "Java", value: "java" },
              { key: "springboot", label: "Spring Boot", value: "springboot" },
              { key: "nodejs", label: "Node Js", value: "nodejs" },
            ],
          },
        ],
      },
      {
        columns: [
          {
            key: "accountNumber",
            label: "Account Number",
            props: { required: true },
          },
          { key: "panNo", label: "Pan Number" },
          {
            key: "adhaar",
            label: "Adhaar",
          },
        ],
      },
    ],
    currentRecord: {},
  };

  onSubmitData = (formData) => {
    let data;
    if (formData.id) {
      data = this.state.data.filter((d) => {
        return d.id !== formData.id;
      });
    } else {
      formData.id = +new Date();
      data = this.state.data.slice();
    }

    this.setState({
      data: [formData, ...data],
    });

    console.log(formData);
  };

  onEdit = (id) => {
    let record = this.state.data.find((d) => {
      return d.id === id;
    });

    this.setState({
      currentRecord: record,
    });
  };

  render() {
    //Accessing all data & simulation of edit

    let data = this.state.data.map((d) => {
      return (
        <tr key={d.id}>
          <td>{d.name}</td>
          <td>{d.age}</td>
          <td>{d.rating}</td>
          <td>{d.qualification}</td>
          <td>{d.gender}</td>
          <td>{d.city}</td>
          <td>{d.skills ? d.skills.join(",") : ""}</td>
          <td>{d.accountNumber}</td>
          <td>{d.panNo}</td>
          <td>{d.adhaar}</td>
          <td>
            <button
              onClick={() => {
                this.onEdit(d.id);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });

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
              <CustomForm
                className="open-account"
                model={this.state.formMetaData}
                //key={this.state.current.id}
                defaultValues={this.state.currentRecord}
                onSubmit={(model) => {
                  this.onSubmitData(model);
                }}
              />
            </div>
          </div>
        </div>
        <table border="1">
          <tbody>{data}</tbody>
        </table>
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
