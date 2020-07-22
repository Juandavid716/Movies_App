import React, { Component } from "react";

export default class Registro extends Component {
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
                <h3>Sign up</h3>
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
                  <button type="button" class="btn btn-dark">
                    Sign up
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
