import userService from "../services/user.service";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.data;
    default:
      return state;
  }
};

export const getUser = (id) => {
  return async (dispatch) => {
    const userData = await userService.getUser(id);

    dispatch({
      type: "GET_USER",
      data: userData,
    });
  };
};

export default userReducer;
