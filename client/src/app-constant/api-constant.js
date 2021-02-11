//const baseURL = "http://158.176.168.112:5000";
//const baseURL = "http://localhost:5000";
//const testURL = "http://localhost:2010";
//const baseURL = "https://cma-edge-banking.ml";
const baseURL = "http://edge-open-banking-api-ibm-cloud-edge-satellite.classic-cluster-satellite-6fb0b86391cd68c8282858623a1dddff-0000.upi.containers.appdomain.cloud"
//const baseURL = "http://158.176.180.100:5000";

const apiConstant = {
  headerOptions: {
    OptionContentTypeJSON: {
      headers: { "Content-Type": "application/json" },
    },
    OptionAccept: {
      headers: { Accept: "application/json" },
    },
    OptionContentTypeFormData: {
      headers: { "Content-Type": "multipart/form-data" },
    },
  },
  endPoint: {
    SIGN_IN: {
      url: `${baseURL}/login`,
      //url: `http://localhost:2010/login`,
      type: "post",
      //headerType: "OptionContentTypeJSON",
    },
    LOAD_OPEN_YOUR_ACCOUNT: {
      //url: `http://localhost:2010/loadAccountConfigurationFront`,
      url: `${baseURL}/call_fetch_account_form_details_api`,
      type: "post",
      // headerType: "OptionContentTypeJSONToken",
    },
    OPEN_YOUR_ACCOUNT: {
      url: `${baseURL}/call_create_bank_account_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CREATE_YOUR_ACCOUNT_CONFIG: {
      //url: `http://localhost:2010/loadAccountConfiguration`,
      url: `${baseURL}/call_fetch_config_obj_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    SAVE_CREATE_YOUR_ACCOUNT_CONFIG: {
      url: `${baseURL}/call_update_data_to_config_obj_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_SELECT_MASTER_CONFIG: {
      //url: `http://localhost:2010/loadSelectMaster`,
      url: `${baseURL}/call_fetch_master_config_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    SAVE_SELECT_MASTER_CONFIG: {
      //url: `http://localhost:2010/saveSelectMasterConfig`,
      url: `${baseURL}/call_update_data_to_master_config_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    EMAIL_VERFICATION: {
      //url: `http://localhost:2010/emailVerification`,
      url: `${baseURL}/request_otp`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    OTP_VERFICATION: {
      //url: `http://localhost:2010/otpVerification`,
      url: `${baseURL}/validate_otp`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_BAR_DATA: {
      url: `${baseURL}/call_get_processed_indicator_count_api`,
      //url: `${testURL}/syncData`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_DORMAT_ACCOUNT_CONFIG: {
      //url: `http://localhost:2010/loadAccountConfiguration`,
      url: `${baseURL}/call_fetch_dormant_config_obj_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    SAVE_DORMAT_ACCOUNT_CONFIG: {
      url: `${baseURL}/call_update_dormant_config_obj_data_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_DORMAT_ACCOUNT: {
      //url: `http://localhost:2010/loadAccountConfigurationFront`,
      url: `${baseURL}/call_fetch_dormant_account_form_api`,
      type: "post",
      // headerType: "OptionContentTypeJSONToken",
    },
    SAVE_DORMAT_ACCOUNT: {
      url: `${baseURL}/call_create_dormant_account_request_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_DORMANT_BAR_DATA: {
      url: `${baseURL}/call_get_dormant_processed_count_api`,
      //url: `${testURL}/syncData`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CHEQUEBOOK_CONFIG: {
      //url: `http://localhost:2010/loadAccountConfiguration`,
      url: `${baseURL}/call_fetch_cheque_book_config_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    SAVE_CHEQUEBOOK_CONFIG: {
      url: `${baseURL}/call_update_cheque_book_config_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CHEQUE_BOOK: {
      //url: `http://localhost:2010/loadAccountConfigurationFront`,
      url: `${baseURL}/call_fetch_cheque_book_form_api`,
      type: "post",
      // headerType: "OptionContentTypeJSONToken",
    },
    SAVE_CHEQUE_BOOK: {
      url: `${baseURL}/call_create_cheque_book_request_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CHEQUEBOOK_BAR_DATA: {
      url: `${baseURL}/call_get_cheque_processed_count_api`,
      //url: `${testURL}/syncData`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CREDIT_CARD_CONFIG: {
      //url: `http://localhost:2010/loadAccountConfiguration`,
      url: `${baseURL}/call_fetch_credit_card_config_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    SAVE_CREDIT_CARD_CONFIG: {
      url: `${baseURL}/call_update_credit_card_config_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CREDIT_CARD: {
      //url: `http://localhost:2010/loadAccountConfigurationFront`,
      url: `${baseURL}/call_fetch_credit_card_form_api`,
      type: "post",
      // headerType: "OptionContentTypeJSONToken",
    },
    SAVE_CREDIT_CARD: {
      url: `${baseURL}/call_create_credit_card_request_api`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CREDIT_CARD_BAR_DATA: {
      url: `${baseURL}/call_get_credit_processed_count_api`,
      //url: `${testURL}/syncData`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
  },
};
module.exports = apiConstant;
