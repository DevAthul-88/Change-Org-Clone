import { combineReducers } from "redux";
import loginReducer from "./Login/reducer";
import editProfileReducer from "./EditProfile/reducer";
import petitionCreateReducer from "./Petition/reducer";

export default combineReducers({
  login: loginReducer,
  editProfile: editProfileReducer,
  create: petitionCreateReducer
});
