import { createStore, applyMiddleware } from "redux";
import getRootReducer from "./reducers/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [thunk, logger]

export const getStore = () => {
    const rootReducer = getRootReducer();
    const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
    return store;
}