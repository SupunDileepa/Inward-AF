import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./index.css";

// Styles
// Import Flag Icons Set
import "flag-icon-css/css/flag-icon.min.css";
// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Simple Line Icons Set
import "simple-line-icons/css/simple-line-icons.css";
// Import Main styles for this application
import "../scss/style.scss";
// Temp fix for reactstrap
import "../scss/core/_dropdown-menu-right.scss";

// Containers
import Full from "./containers/Full/";
import bhtFull from "./containers/Full/bhtFull";

//components
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

// Views
// import Login from "./views/Pages/Login/";
// import Register from "./views/Pages/Register/";
import Page404 from "./views/Pages/Page404/";
import Page500 from "./views/Pages/Page500/";
import Landing from "./views/Landing";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";


import Prescribe from "./views/prescribe";
import viewAllergies from "./views/Allergies/view";

//check for token
if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get userinfo
  const decoded = jwt_decode(localStorage.jwtToken);
  //seet user and isAuthenicated
  store.dispatch(setCurrentUser(decoded));
  //chek for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());

    //redirect to login

    window.location.href = "/login";
  }
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        {/* <Route exact path="/login" name="Login Page" component={Login} />
        <Route
          exact
          path="/register"
          name="Register Page"
          component={Register}
        /> */}
        {/* <Route exact path="/404" name="Page 404" component={Page404} />
        <Route exact path="/500" name="Page 500" component={Page500} /> */}
        <Route exact path="/" name="Landing" component={Landing} />
        <Route exact path="/login" name="Login" component={Login} />

     


        <Route exact path="/register" name="Register" component={Register} />

        <Route  path="/bht" name="bhtFull" component={bhtFull} />
        <Route exact path="/bht/prescriptions" name="prescription" component={Prescribe} />  
        <Route exact path="/bht/allergies/view" name="viewAllergies" component={viewAllergies} />
              
        <Route  path="/" name="Home" component={Full} /> 
        

                
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
