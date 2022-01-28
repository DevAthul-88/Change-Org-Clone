import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_ERROR } from "./type";

const initialState = {};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };

    case LOGIN_SUCCESS:
      return { loading: false, data: action.payload };

    case LOGIN_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default loginReducer;
