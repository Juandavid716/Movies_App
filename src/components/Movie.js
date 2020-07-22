import React, { Component } from "react";
const API_KEY = "http://www.omdbapi.com/?apikey=4a5c0a67&s=the+godfather";
export default class Movie extends Component {
  state = { movie: [] };
  componentDidMount() {
    fetch(API_KEY)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movie: data.Search,
        })
      );
  }
  render() {
    let movies = this.state.movie.map((movie) => {
      return (
        <div className="card-body">
          <img src={movie.Poster} className="card-img-top" alt="..." />
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
              <input className="m-3" type="text" name="search"></input>
              <button type="button" class="btn btn-success">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card d-flex flex-row">{movies}</div>
        </div>
      </div>
    );
  }
}
