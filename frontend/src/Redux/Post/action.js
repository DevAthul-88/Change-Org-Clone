import {
  PETITION_ALL,
  PETITION_ID,
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
    dispatch({ type: PETITION_STARTED, payload: data });
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
};
export const petitionByDate = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_REQUESTED });
    const { data } = await axios.get("/api/petition/getByDate");
    dispatch({ type: PETITION_ALL, payload: data });
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
};
export const petitionById = (id) => async (dispatch) => {
  try {
    dispatch({type:PETITION_REQUESTED})
    const {data} = await axios.get(`/api/petition/${id}`)
    dispatch({type:PETITION_ID , payload: data})
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
}