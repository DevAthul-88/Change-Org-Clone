import {
  PETITION_POPULAR,
  PETITION_SIGNED,
  PETITION_RECENT,
  PETITION_VICTORY,
  PETITION_ERROR,
  PETITION_FEATURED,
  PETITION_STARTED,
  PETITION_REQUESTED,
} from "./type";

const initialState = {};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case PETITION_REQUESTED:
      return { loading: true };
    case PETITION_STARTED:
      return { loading: false, data: action.payload };
    case PETITION_SIGNED:
      return { loading: false, data: action.payload };
    case PETITION_FEATURED:
      return { loading: false, data: action.payload };
    case PETITION_POPULAR:
      return { loading: false, data: action.payload };
    case PETITION_RECENT:
      return { loading: false, data: action.payload };
    case PETITION_VICTORY:
      return { loading: false, data: action.payload };
    case PETITION_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
