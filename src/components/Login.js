import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row d-flex align-items-center "
          style={{ height: "800px" }}
        >
          {" "}
          <div className="col-sm">
            <form className=" d-flex  align-items-center justify-content-center ">
              <div className="form-color d-flex flex-column align-items-center">
                <h3>Log in</h3>
                <div>
                  <label htmlFor="user"> Username:</label>
                  <input
                    className="m-3"
                    type="text"
                    name="user"
                    placeholder="username.."
                  ></input>
                </div>
                <div>
                  <label htmlFor="user"> Password: </label>
                  <input className="m-3" type="pass" name="pass"></input>
                </div>

                <div>
                  <button type="button" className="btn btn-success">
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
