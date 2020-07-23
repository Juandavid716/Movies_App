import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
// const API_KEY = "http://www.omdbapi.com/?apikey=4a5c0a67&s=";
const API_KEY_TYPE = "http://www.omdbapi.com/?apikey=4a5c0a67&t=";
export default class Movie extends Component {
  state = { movie: [], rating: 0, name: "" };

  getMovie(name) {
    fetch(API_KEY_TYPE + name)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movie: [data],
        });
      });
  }
  searchMovie() {
    this.setState({ movie: [] });
    this.getMovie(this.state.name);
  }
  ratingChanged = (newRating) => {
    console.log(newRating);
  };

  render() {
    let movies = this.state.movie.map((movie) => {
      return (
        <div className="card-body" style={{ width: "145px" }}>
          <img
            src={movie.Poster}
            className="card-img-top"
            alt="..."
            style={{ width: "145px" }}
          />
          <ReactStars
            count={10}
            value={movie.Ratings[0].Value.substr(0, 3)}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
          ,<h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
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
                class="btn btn-success"
                onClick={this.searchMovie.bind(this)}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" d-flex flex-row">{movies}</div>
        </div>
      </div>
    );
  }
}
