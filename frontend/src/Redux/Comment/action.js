import { COMMENT_REQUESTS, COMMENT_ADDED, COMMENT_ERROR } from "./type";
import axios from "axios";
import config from "../../Config/header";

export const commentAction = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_REQUESTS });

    const { data } = await axios.post(
      "/api/petition/comment",
      credentials,
      config
    );
    if (data.error)
      return dispatch({ type: COMMENT_ERROR, payload: data.message });
    dispatch({ type: COMMENT_ADDED, payload: data.message });
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error.message });
  }
};


