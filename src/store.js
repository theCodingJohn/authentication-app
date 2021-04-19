import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
  loggedUser: authReducer,
  userData: userReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
