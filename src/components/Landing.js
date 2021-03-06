import React from "react";
import Carousel from "./Carousel";

import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Landing(props) {
  return (
    <div className="container">
      <div className="row mt-2" style={{ height: "900px" }}>
        <div className="col-sm ">
          <div className="card-body">
            <img
              src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "130px" }}
            />

            <h5>The Godfather </h5>
          </div>
          <div className="card-body body-content">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "130px" }}
            />
            <h5>John Wick </h5>
          </div>
          <div className="card-body body-content-x">
            <img
              src="https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: "130px" }}
            />
          </div>
        </div>
        <div className="col-sm body-content ">
          {" "}
          <div className="col-sm body-content ">
            <h1 className="white">Welcome to MoviesApp!</h1>
            <p className="white">Enjoy of all our movies in this website. </p>
            <div className="flex-row">
              <Link
                className="btn btn-success m-3 white"
                color="secondary"
                to="/login"
              >
                Get Started
              </Link>

              <a href="#movies-app" className="btn btn-dark m-3 white">
                See Movies
              </a>
            </div>
          </div>
        </div>
        <div id="movies-app">
          <h1 className="white ml-2"> Movies</h1>
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  );
}
