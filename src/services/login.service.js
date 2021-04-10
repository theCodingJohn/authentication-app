import axios from "axios";

const baseUrl = "/users/login";

const login = async (credentials) => {
  try {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export default {
  login,
};
