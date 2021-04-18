import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BACKEND_LINK}/users`;

const signup = async (credentials) => {
  try {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export default signup;
