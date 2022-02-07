import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from "./type";
import axios from "axios";
import config from "../../Config/header";

export const registerAction = (credentials) => async (dispatch) => {
try {
    dispatch({ type:REGISTER_REQUEST})
    const {data} = await axios.post("/api/user/register" , credentials , config)
    dispatch({ type:REGISTER_SUCCESS , payload: data.status})
} catch (error) {
    dispatch({ type:REGISTER_ERROR, payload: error.message})
}
}
