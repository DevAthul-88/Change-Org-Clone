import {
  PETITION_ALL,
  PETITION_POPULAR,
  PETITION_SIGNED,
  PETITION_RECENT,
  PETITION_VICTORY,
  PETITION_ERROR,
  PETITION_FEATURED,
  PETITION_STARTED,
  PETITION_REQUESTED,
} from "./type";
import config from "../../Config/header";
import axios from "axios";

export const petitionStarted = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_REQUESTED });

    const { data } = await axios.get("/api/petition/getByUser", config);
    dispatch({type:PETITION_STARTED , payload: data})
    console.log(data);
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
};