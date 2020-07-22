import React, { Component } from "react";
const API_KEY = "http://www.omdbapi.com/?apikey=4a5c0a67&s=";
export default class Movie extends Component {
  state = { movie: [], name: "" };

  getMovies(name) {
    fetch(API_KEY + name)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movie: data.Search,
        })
      );
  }
  searchMovie() {
    this.setState({ movie: [] });
    this.getMovies(this.state.name);
  }
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
          <h5 className="card-title">{movie.Title}</h5>
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
