import { COMMENT_REQUESTS, COMMENT_ADDED, COMMENT_ERROR } from "./type";

const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_REQUESTS:
      return { loader: true };
    case COMMENT_ADDED:
      return { loader: false, messages: action.payload };
    case COMMENT_ERROR:
      return { loader: false, errors: action.payload };
      default: return state
  }
};

export default commentReducer