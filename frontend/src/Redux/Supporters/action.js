import { SUPPORTER_ERROR, SUPPORTER_SUCCESS, SUPPORTER_REQUEST } from "./type";
import axios from "axios";

export const supporterAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: SUPPORTER_REQUEST });
    const { data } = await axios.get(`/api/supporters/${id}`);
    dispatch({ type: SUPPORTER_SUCCESS, data: data.data });
  } catch (error) {
    dispatch({ type: SUPPORTER_ERROR, error: error.message });
  }
};
