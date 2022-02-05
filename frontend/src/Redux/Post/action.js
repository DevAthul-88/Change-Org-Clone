import {
  PETITION_ERROR,
  PETITION_STARTED,
  PETITION_REQUESTED,
} from "./type";
import config from "../../Config/header";
import axios from "axios";

export const petitionStarted = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_REQUESTED });

    const { data } = await axios.get("/api/petition/getByUser", config);
    dispatch({ type: PETITION_STARTED, payload: data });
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
};
