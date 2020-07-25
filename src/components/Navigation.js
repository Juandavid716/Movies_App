import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MoviesApp
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {" "}
                <Link className="nav-link " to="/login">
                  {" "}
                  Log in{" "}
                </Link>
              </li>{" "}
              <li className="nav-item">
                {" "}
                <Link className="nav-link " to="/signup">
                  {" "}
                  Sign up{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
