import { COMMENT_REQUESTS, COMMENT_ADDED, COMMENT_ERROR } from "./type";

const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_REQUESTS:
      return { loading: true };
    case COMMENT_ADDED:
      return { loading: false, message: action.payload };
    case COMMENT_ERROR:
      return { loading: false, error: action.payload };
      default: return state
  }
};

export default commentReducer