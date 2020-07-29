import React, { useReducer, useEffect, useState } from "react";
import authReducer from "../reducers/autentication.reducer";
import { setCurrentUser } from "../actions/autentication.action";
import AuthGlobal from "./AuthGlobal";
import jwt_decode from "jwt-decode";

const Auth = (props) => {
  const [stateUser, dispatch] = useReducer(authReducer, {
    isAuthenticated: null,
    user: {},
  });
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    if (localStorage.jwt) {
      const decoded = localStorage.jwt ? localStorage.jwt : "";
      dispatch(setCurrentUser(jwt_decode(decoded)));
    }
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  } else {
    return (
      <AuthGlobal.Provider
        value={{
          stateUser,
          dispatch,
        }}
      >
        {props.children}
      </AuthGlobal.Provider>
    );
  }
};

export default Auth;
