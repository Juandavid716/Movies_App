import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthGlobal from "../context/store/AuthGlobal";
import { logoutUser, loginUser } from "../context/actions/autentication.action";
export default function Navigation(props) {
  const context = useContext(AuthGlobal);
  const [showChild, setShowChild] = useState(false);
  const [logOut, setlogOut] = useState(false);
  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      setlogOut(true);
    }
    setShowChild(true);
  }, [context.stateUser.isAuthenticated, props.history]);
  const closeSession = () => {
    setlogOut(false);
    logoutUser(context.dispatch);
  };

  if (!showChild) {
    return null;
  } else {
    return (
      <div>
        {logOut && (
          <nav class="navbar navbar-expand-lg navbar-dark white">
            <div className="container">
              <Link className="navbar-brand" to="/">
                MoviesApp
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active"></li>
                  <li class="nav-item">
                    <Link className="nav-link " to="/movies">
                      {" "}
                      My Movies{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link " to="/search">
                      {" "}
                      Search{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link onClick={closeSession} className="nav-link " to="/">
                      {" "}
                      Log Out{" "}
                    </Link>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </nav>
        )}{" "}
        {!logOut && (
          <nav class="navbar navbar-expand-lg navbar-dark white">
            <div className="container">
              <Link className="navbar-brand" to="/">
                MoviesApp
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active"></li>
                  <li className="nav-item">
                    {" "}
                    <Link className="nav-link " to="/login">
                      {" "}
                      Log in{" "}
                    </Link>
                  </li>{" "}
                  <li class="nav-item">
                    <Link className="nav-link " to="/signup">
                      {" "}
                      Sign up{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
      </div>
    );
  }
}
