import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";
import axios from "axios";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
const API_KEY = "https://www.omdbapi.com/?apikey=4a5c0a67&s=";
const API_KEY_TYPE = "https://www.omdbapi.com/?apikey=4a5c0a67&t=";
export default class Movie extends Component {
  state = {
    movie: [],
    rating: 0,
    name: "",
    openRating: false,
    movieTitle: "",
    year: "",
  };
  async addMovie(e) {
    let name = e.target.name;
    fetch(API_KEY_TYPE + name)
      .then((response) => response.json())
      .then((data) => {
        let ratingSelected = 0;
        if (data.Ratings !== undefined) {
          ratingSelected = data.Ratings[0].Value.substr(0, 3);
        }
        let movie = {
          title: data.Title,
          year: data.Year,
          rating: ratingSelected,
          poster: data.Poster,
          content: "  ",
          titlecomment: "  ",
        };

        axios.post("http://localhost:3001/server/movies", movie);
      });
  }

  getMovie(name) {
    fetch(API_KEY + name)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search === undefined) {
          Swal.fire({
            title: "Error!",
            text: "Movie not found",
            icon: "error",
            confirmButtonText: "Accept",
          });
        } else {
          this.setState({
            movie: data.Search,
          });
        }
      });
  }

  seeRating(e) {
    console.log(e.target.value);
  }
  searchMovie() {
    this.setState({ movie: [] });
    if (this.state.name === "") {
      Swal.fire({
        title: "Error!",
        text: " Write the name of a movie ",
        icon: "error",
        confirmButtonText: "Accept",
      });
    } else {
      this.getMovie(this.state.name);
    }
  }
  ratingChanged = () => {
    this.setState({
      openRating: !this.state.openRating,
    });
  };

  toggleNewRating(e) {
    let name = e.target.value;

    fetch(API_KEY_TYPE + name)
      .then((response) => response.json())
      .then((info) => {
        if (info.Ratings !== undefined) {
          console.log(info.Ratings[0].Value);
        } else {
          console.log("NOT FOUND");
        }
        this.setState({
          rating: info.Ratings[0].Value.substr(0, 3),
          openRating: !this.state.openRating,
          movieTitle: name,
        });
      });
  }

  render() {
    let movies = this.state.movie.map((movie) => {
      return (
        <div
          className="card-body"
          style={{ width: "145px" }}
          key={movie.Title + movie.Year}
        >
          <div className="container-movie">
            <img
              src={movie.Poster}
              className="card-img-top"
              alt="..."
              style={{ width: "145px" }}
            />

            <button type="button" className="btn btn-img">
              <img
                src="https://img.icons8.com/fluent/48/000000/add.png"
                value={movie.Title}
                name={movie.Title}
                alt={movie.Title}
                onClick={this.addMovie.bind(this)}
              ></img>
            </button>
          </div>

          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          <div className="d-flex align-items-end flex-grow-1">
            <button
              type="button"
              className="btn btn-success"
              onClick={this.toggleNewRating.bind(this)}
              //this.seeRating.bind(movie.Title)
              value={movie.Title}
            >
              See Rating
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="input-search body-content">
          <div>
            <h2>Search movie</h2>
            <input
              className="m-3"
              type="text"
              name="search"
              value={this.state.name}
              onChange={(e) => {
                let findWord = e.target.value;
                this.setState({ name: findWord });
              }}
            ></input>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.searchMovie.bind(this)}
            >
              Search
            </button>
            <Modal
              isOpen={this.state.openRating}
              toggle={this.toggleNewRating.bind(this)}
            >
              <ModalHeader toggle={this.ratingChanged.bind(this)}>
                <h2>{this.state.movieTitle}</h2>
              </ModalHeader>
              <ModalBody>
                <h4>Imdb Puntuation</h4>
                <ReactStars
                  count={10}
                  value={this.state.rating}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                {this.state.rating}
              </ModalBody>
            </Modal>
          </div>
        </div>
        <div className="row m-3 d-flex align-items-center justify-content-center">
          <div className="col-7">
            <div className="d-flex flex-wrap">{movies}</div>
          </div>
        </div>
      </div>
    );
  }
}
