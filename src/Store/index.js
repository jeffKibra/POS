import { combineReducers, createStore, compose, applyMiddleware } from "redux";

const rootReducer = combineReducers({});

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;
