import React, { Component } from "react";
import Carousel from "./Carousel";
import { Button } from "reactstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css";
const API_KEY = "http://www.omdbapi.com/?apikey=4a5c0a67&s=Life+is+beautiful";
export default class Landing extends Component {
  state = {
    img: "",
  };
  // componentDidMount() {
  //   this.getMovie();
  // }
  getMovie() {
    fetch(API_KEY)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search[0].Poster);
        this.setState({
          img: data.Search[0].Poster,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-2" style={{ height: "800px" }}>
          <div className="col-sm ">
            <div className="card-body">
              <img
                src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                className="card-img-top"
                alt="..."
                style={{ width: "145px" }}
              />

              <div></div>
            </div>
            <div className="card-body body-content">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
                className="card-img-top"
                alt="..."
                style={{ width: "145px" }}
              />
            </div>
            <div className="card-body body-content-x">
              <img
                src="https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                className="card-img-top"
                alt="..."
                style={{ width: "145px" }}
              />
            </div>
          </div>
          <div className="col-sm body-content ">
            {" "}
            <div className="col-sm body-content ">
              <h1>Welcome to MoviesApp!</h1>
              <p>Enjoy of all our movies in this website. </p>
              <div className="flex-row">
                <Button color="secondary">Get Started</Button>{" "}
                <button type="button" className="btn btn-success m-3">
                  See Movies
                </button>
              </div>
            </div>
            <div className="col-sm body-content "></div>
          </div>
          <div>
            <h1> Movies</h1>
            <Carousel></Carousel>
          </div>
        </div>
      </div>
    );
  }
}
