import loginService from "../services/login.service";
import userService from "../services/user.service";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.data;
    case "SET_USER":
      return action.data;
    default:
      return state;
  }
};

export const login = ({ email, password }) => {
  return async (dispatch) => {
    const user = await loginService.login({ email, password });

    if (!user.error) {
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      window.localStorage.removeItem("formError");
      userService.setToken(user.token);

      dispatch({
        type: "LOGIN_USER",
        data: user,
      });
    }

    window.localStorage.setItem("formError", JSON.stringify(user));
  };
};

export const setUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_USER",
      data: user,
    });
  };
};

export default authReducer;
