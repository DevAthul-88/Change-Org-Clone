import { combineReducers } from "redux";
import loginReducer from "./Login/reducer";
import editProfileReducer from "./EditProfile/reducer";
import petitionCreateReducer from "./Petition/reducer";
import postReducer from "./Post/reducer";
import profileReducer from "./Profile/reducer";
import detailsReducer from "./Single/reducer";
import commentReducer from "./Comment/reducer";
import allReducer from "./All/reducer";
import discoverReducer from "./Discover/reducer";

export default combineReducers({
  login: loginReducer,
  editProfile: editProfileReducer,
  create: petitionCreateReducer,
  post: postReducer,
  profile: profileReducer,
  details: detailsReducer,
  comment: commentReducer,
  all: allReducer,
  discover: discoverReducer,
});
