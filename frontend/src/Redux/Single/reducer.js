import {
  DETAILS_ERROR,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
  DECLARE_VICTORY,
} from "./type";

const initialState = {};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_REQUEST:
      return { loading: true };
    case DETAILS_SUCCESS:
      return { loading: false, data: action.payload };
    case DECLARE_VICTORY:
      return { loading: false, redirect: true };
    case DETAILS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default detailsReducer;
