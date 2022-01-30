import {
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ERROR,
} from "./types";

import { LOGIN_SUCCESS } from "../Login/type";
import axios from "axios";

const editProfileAction = (credentials) => async (dispatch , getState) => {
  try {
    dispatch({ type: EDIT_PROFILE_REQUEST });
    
    const {login:{userInfo}} = getState();
    
    
    
    const { data } = await axios.post("/api/user/edit", credentials);
    console.log(data);
    if (data.message) {
      dispatch({ type: EDIT_PROFILE_ERROR, payload: data.message });
    }
  
      dispatch({ type: EDIT_PROFILE_SUCCESS, payload: data.userInfo });
      dispatch({ type: LOGIN_SUCCESS, payload: data.userInfo });
      localStorage.setItem("user_cred", JSON.stringify(data.userInfo));
    
  } catch (error) {
    dispatch({ type: EDIT_PROFILE_ERROR, payload: error.message });
  }
};

export default editProfileAction;
