import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from './profileReducer';
import messengerReducer from './messengerReducer';
import allUsersReducer from "./allUsersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';

let redusers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    allUsersPage: allUsersReducer,
    authPage: authReducer
});

let store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware));

// window.store = store;

export default store;