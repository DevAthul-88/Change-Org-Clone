import { combineReducers } from "redux";
import loginReducer from "./Login/reducer";
import editProfileReducer from "./EditProfile/reducer";

export default combineReducers({
  login: loginReducer,
  editProfile: editProfileReducer,
});
