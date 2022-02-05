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
export const petitionSigned = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_REQUESTED });
    const { data } = await axios.get("/api/petition/getSigned", config);
    dispatch({ type: PETITION_SIGNED, payload: data });
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
};

export const petitionFeatured = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_REQUESTED });
    const { data } = await axios.get("/api/petition/featured");
    dispatch({ type: PETITION_FEATURED, payload: data });
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
};

export const petitionPopular = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_REQUESTED });
    const { data } = await axios.get("/api/petition/popular");
    dispatch({ type: PETITION_POPULAR, payload: data });
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
};

export const petitionRecent = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_REQUESTED });
    const { data } = await axios.get("/api/petition/recent");
    dispatch({ type: PETITION_RECENT, payload: data });
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
};

export const petitionVictory = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_REQUESTED });
    const { data } = await axios.get("/api/petition/victory");
    dispatch({ type: PETITION_VICTORY, payload: data });
  } catch (error) {
    dispatch({ type: PETITION_ERROR, payload: error.message });
  }
};
