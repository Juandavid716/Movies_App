import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
const API_KEY = "http://www.omdbapi.com/?apikey=4a5c0a67&s=";
const API_KEY_TYPE = "http://www.omdbapi.com/?apikey=4a5c0a67&t=";
export default class Movie extends Component {
  state = { movie: [], rating: 0, name: "", openRating: false, movieTitle: "" };

  getMovie(name) {
    fetch(API_KEY + name)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movie: data.Search,
        });
      });
  }

  seeRating(e) {
    console.log();
  }
  searchMovie() {
    this.setState({ movie: [] });
    this.getMovie(this.state.name);
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
          <img
            src={movie.Poster}
            className="card-img-top"
            alt="..."
            style={{ width: "145px" }}
          />
          ,<h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          <button
            type="button"
            class="btn btn-success"
            onClick={this.toggleNewRating.bind(this)}
            //this.seeRating.bind(movie.Title)
            value={movie.Title}
          >
            See Rating
          </button>
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row m-3 d-flex align-items-center justify-content-center">
          <div className="input-search ">
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
        </div>
        <div>
          <div className=" d-flex flex-row">{movies}</div>
        </div>
      </div>
    );
  }
}
