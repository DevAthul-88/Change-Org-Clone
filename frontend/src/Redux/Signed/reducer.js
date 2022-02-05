import {
    PETITION_SIGNED,
    PETITION_ERROR,
    PETITION_REQUESTED,
  } from "./type";
  
  const initialState = {};
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case PETITION_REQUESTED:
        return { loading: true };
      case PETITION_SIGNED:
        return { loading: false, data: action.payload };
      case PETITION_ERROR:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default postReducer;
  