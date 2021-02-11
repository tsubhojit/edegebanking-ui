import { combineReducers } from "redux";
import authenticationReducer from "./authentication-reducer";
import openYourAccountReducer from "./open-your-account-reducer";
import createYourAccountConfigationReducer from "./create-your-account-configuration-reducer";
import selectMasterReducer from "./select-master-configuration-reducer";
import DashboardReducer from "./dashboard-reducer";
import DormatAccountConfigurationReducer from "./dormat-account-configuration-reducer";
import DormatAccountReducer from "./dormat-account-reducer";
import ChequebookConfigurationReducer from "./chequebook-configuration-reducer";
import ChequebookReducer from "./chequebook-reducer";
import CreditCardConfigurationReducer from "./configure-credit-card-reducer";
import CreditCardReducer from "./credit-card-reducer";

export default function getRootReducer() {
  return combineReducers({
    authenticationReducer,
    openYourAccountReducer,
    createYourAccountConfigationReducer,
    selectMasterReducer,
    DashboardReducer,
    DormatAccountConfigurationReducer,
    DormatAccountReducer,
    ChequebookConfigurationReducer,
    ChequebookReducer,
    CreditCardConfigurationReducer,
    CreditCardReducer,
  });
}
