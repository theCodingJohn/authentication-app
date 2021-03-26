import axios from "axios";

const baseUrl = "/users";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getUser = async (id) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get(`${baseUrl}/${id}`, config);
  return response.data;
};

export default {
  setToken,
  getUser,
};
