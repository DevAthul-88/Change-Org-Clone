import {
  DETAILS_ERROR,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
  DECLARE_VICTORY,
} from "./type";
import axios from "axios";
import config from "../../Config/header";

export const petitionById = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAILS_REQUEST });
    const { data } = await axios.get(`/api/petition/${id}`);
    dispatch({ type: DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DETAILS_ERROR, payload: error.message });
  }
};

export const declareVictory = (petitionId, userId) => async (dispatch) => {
  try {
    dispatch({ type: DETAILS_REQUEST });
    const { data } = await axios.post(
      "/api/petition/declare",
      { id: petitionId, userId: userId },
      config
    );
    if (data.status) {
      dispatch({ type: DECLARE_VICTORY });
    }
  } catch (error) {
    dispatch({ type: DETAILS_ERROR, payload: error.message });
  }
};
