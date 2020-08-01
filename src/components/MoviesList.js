import React, { useContext, useState, useEffect } from "react";

import AuthGlobal from "../context/store/AuthGlobal";

export default function MoviesList(props) {
  const context = useContext(AuthGlobal);
  const [showChild, setShowChild] = useState(false);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    if (
      context.stateUser.isAuthenticated === false ||
      context.stateUser.isAuthenticated === null
    ) {
      props.history.push("/");
    } else {
      props.history.push("/movies");
    }
    setShowChild(true);

    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      fetch("http://localhost:3001/server/usuarios", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: jwt,
        },
      }).then((res) => res.json());
    }
  }, [context.stateUser.isAuthenticated, props.history]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3001/server/movies");
      res.json().then((res) => setMovie(res.movies));
    }

    fetchData();
  }, []);
  if (!showChild) {
    return null;
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {movie.map((mov) => (
              <div
                className="card-body"
                style={{ width: "145px" }}
                key={mov["title"] + mov["year"]}
              >
                <div className="">
                  <img
                    src={mov["poster"]}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "145px" }}
                  />
                </div>

                <h5 className="card-title">{mov["title"]}</h5>
                <p className="card-text">{mov["year"]}</p>
              </div>
            ))}
          </div>
          <div className="col">
            {movie.map((mov) => (
              <div className style={{ width: "145px" }}>
                <h3> Comments </h3>
                <p>{mov["content"]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
