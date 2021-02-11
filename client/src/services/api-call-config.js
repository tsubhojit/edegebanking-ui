import http from "axios";
import { endPoint, headerOptions } from "../app-constant/api-constant";

class APICallConfig {
  static callAPIService = (APIName, parameter) => {
    const APIInfo = endPoint[APIName];
    return APICallConfig[APIInfo.type](APIInfo, parameter).then((response) => {
      return response;
    });
  };

  static get = (APIInfo, parameter) => {
    return http
      .get(
        parameter
          ? this.generateAPIParameterWithURL(APIInfo, parameter)
          : APIInfo.url,
        headerOptions[APIInfo.headerType]
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  static post = (APIInfo, parameter) => {
    return http
      .post(APIInfo.url, parameter, {
        headers: {
          Authorization: "Bearer " + window.sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  static delete = (APIInfo, pathParameters, parameterBody) => {
    let resPathParamURL = pathParameters.join("/");
    return http
      .delete(
        APIInfo.url + "/" + resPathParamURL,
        parameterBody,
        headerOptions[APIInfo.headerType]
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  static generateAPIParameterWithURL = (APIInfo, parameter) => {
    let parameters = "";
    let url = APIInfo.url;
    Object.keys(parameter).forEach((key, index) => {
      if (index === 0) {
        parameters += `${key}=${parameter[key]}`;
      } else {
        parameters += `&${key}=${parameter[key]}`;
      }
    });
    if (parameters !== "") {
      url = APIInfo.url + "?" + parameters;
    }
    console.log("Generated URL ", url);
    return url;
  };
}
export default APICallConfig;
