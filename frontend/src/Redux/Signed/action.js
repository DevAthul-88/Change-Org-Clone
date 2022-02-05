import {
  PETITION_SIGNED,
  PETITION_ERROR,
  PETITION_REQUESTED,
} from "./type";
import axios from "axios";
import config from "../../Config/header";

export const petitionSigned = () => async (dispatch) => {
    try {
      dispatch({ type: PETITION_REQUESTED });
      const { data } = await axios.get("/api/petition/getSigned", config);
      dispatch({ type: PETITION_SIGNED, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: PETITION_ERROR, payload: error.message });
    }
  };
  