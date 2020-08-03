import React, { useContext, useState, useEffect } from "react";
import AuthGlobal from "../context/store/AuthGlobal";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
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
      let userID = context.stateUser.user.usuariobd._id;
      console.log();
      const res = await fetch("http://localhost:3001/server/movies");
      res.json().then((res) => {
        // const result = res.movies["userSelected"].filter(
        //   (user) => user === userID
        // );
        const movID = res.movies.filter(
          (mov) => mov["userSelected"] === userID
        );

        setMovie(movID);
      });
    }

    fetchData();
  }, [context]);

  async function deleteMovie(id) {
    await axios.delete("http://localhost:3001/server/movies/" + id);
  }
  if (!showChild) {
    return null;
  } else {
    return (
      <div className="container">
        {movie.map((mov) => (
          <div className="row">
            <div className=" card-body col-6" key={mov["title"] + mov["year"]}>
              {" "}
              <img
                src={mov["poster"]}
                className="card-img-top"
                alt="..."
                style={{ width: "145px" }}
              />
              <h5 className="card-title">{mov["title"]}</h5>
              <p className="card-text">{mov["year"]}</p>
            </div>

            <div className="col-6">
              <h3> Comments </h3>
              <button
                className="btn btn-danger m-3 white"
                color=""
                value={mov["_id"]}
                onClick={(e) => deleteMovie(e.target.value)}
              >
                Delete
              </button>
              <h5>{mov["titlecomment"]}</h5>
              <p>{mov["content"]}</p>
              <h6> Rating </h6>
              <ReactStars
                count={10}
                value={mov["rating"]}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              <button
                className="btn btn-success m-3 white"
                color="secondary"
                to="/login"
              >
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
