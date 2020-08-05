import React, { useContext, useState, useEffect } from "react";
import AuthGlobal from "../context/store/AuthGlobal";
import ReactStars from "react-rating-stars-component";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";

export default function MoviesList(props) {
  const context = useContext(AuthGlobal);
  const [showChild, setShowChild] = useState(false);
  const [movie, setMovie] = useState([]);
  const [comment, setNewComment] = useState(false);
  const [rating, setRating] = useState(0);

  const [content, setContent] = useState("");
  const [titlecomment, setTitle] = useState("");
  const [movieID, setMovieID] = useState("");
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

      const res = await fetch("http://localhost:3001/server/movies");
      res.json().then((res) => {
        const movID = res.movies.filter(
          (mov) => mov["userSelected"] === userID
        );

        setMovie(movID);
      });
    }

    fetchData();
  }, [context]);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  async function getMovie() {
    let userID = context.stateUser.user.usuariobd._id;

    const res = await fetch("http://localhost:3001/server/movies");
    res.json().then((res) => {
      const movID = res.movies.filter((mov) => mov["userSelected"] === userID);

      setMovie(movID);
    });
  }

  async function toggleNewComment() {
    setNewComment(!comment);
  }
  async function toggleNewCritic() {
    const updateMovie = { titlecomment, content, rating };

    await axios.put(
      "http://localhost:3001/server/movies/" + movieID,
      updateMovie
    );

    setNewComment(!comment);
    window.location.reload();
  }
  async function getMovieID(id) {
    setMovieID(id);
    const movie = await axios.get("http://localhost:3001/server/movies/" + id);

    setTitle(movie.data["titlecomment"]);
    setContent(movie.data["content"]);
    setRating(movie.data["rating"]);

    toggleNewComment();
  }

  async function deleteMovie(id) {
    await axios.delete("http://localhost:3001/server/movies/" + id);
    getMovie();
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
              <div className="title d-flex flex-row justify-content-between">
                <h3> Comments </h3>
                <button
                  className="btn btn-danger m-3 white"
                  value={mov["_id"]}
                  onClick={(e) => deleteMovie(e.target.value)}
                >
                  Delete
                </button>{" "}
              </div>

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
                onClick={(e) => getMovieID(e.target.value)}
                value={mov["_id"]}
              >
                Comment
              </button>
            </div>
          </div>
        ))}
        <Modal isOpen={comment} toggle={toggleNewComment.bind(this)}>
          <ModalHeader toggle={toggleNewComment.bind(this)}>
            Modal title
          </ModalHeader>
          <ModalBody>
            <Label className="specialLabel" for="title">
              Title
            </Label>
            <Input
              type="title"
              value={titlecomment}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Label className="specialLabel" for="content">
              Content
            </Label>
            <Input
              type="textarea"
              placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Label className="specialLabel" for="rating">
              Rating
            </Label>
            <ReactStars
              count={10}
              size={24}
              value={rating}
              activeColor="#ffd700"
              onChange={ratingChanged}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={toggleNewCritic.bind(this)} color="primary">
              Add comment
            </Button>{" "}
            <Button onClick={toggleNewComment.bind(this)} color="secondary">
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
