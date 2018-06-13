import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:5000/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login-get user token

export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:5000/api/users/login", userData)
    .then(res => {
      //save to localStorage
      const { token } = res.data;
      //set token to ls
      localStorage.setItem("jwtToken", token);
      //set token to auth header
      setAuthToken(token);
      //Decode token to get user data

      const decoded = jwt_decode(token);

      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//set logged user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//Log user out
export const logoutUser = () => dispatch => {
  //remove token from storage

  localStorage.removeItem("jwtToken");
  //remove auth haeder for future requests

  setAuthToken(false);
  //set the current user to {} which will set  isAuthenicated to false
  dispatch(setCurrentUser({}));
};
