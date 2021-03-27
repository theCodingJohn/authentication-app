import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Reducers
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
  loggedUser: authReducer,
  userData: userReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
