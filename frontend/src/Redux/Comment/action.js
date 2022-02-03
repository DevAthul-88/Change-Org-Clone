import { COMMENT_REQUESTS, COMMENT_ADDED, COMMENT_ERROR } from "./type";
import { DETAILS_ERROR, DETAILS_REQUEST, DETAILS_SUCCESS } from "../Single/type";
import axios from "axios";
import config from "../../Config/header";

export const commentAction = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_REQUESTS });
   dispatch({type:DETAILS_REQUEST})
    const { data } = await axios.post(
      "/api/petition/comment",
      credentials,
      config
    );
    console.log(data);
    if (data.error)return dispatch({ type: COMMENT_ERROR, payload: data.message });  
    dispatch({ type: COMMENT_ADDED, payload: data.message });
    dispatch({type:DETAILS_SUCCESS , payload:data.data})
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error.message });
  }
};


