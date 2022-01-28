import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_REQUEST } from "./type";
import axios from "axios";

const loginAction = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post("/api/user/login", credentials);

    if (data.error) {
      dispatch({ type: LOGIN_ERROR, error: data.error });
    }
    if (data.token) {
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem("token", data.token);
    }
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error: error.message });
  }
};
export default loginAction