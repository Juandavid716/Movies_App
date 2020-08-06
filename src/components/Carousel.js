import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img
        alt=""
        src="https://mcdn.wallpapersafari.com/medium/42/73/bIHwFl.jpg"
      />
      <p className="legend">The Godfather Part II</p>
    </div>
    <div>
      <img alt="" src="https://wallpaperaccess.com/thumb/294521.jpg" />
      <p className="legend">Avengers: Age Of Ultron</p>
    </div>
    <div>
      <img alt="" src="https://wallpaperaccess.com/thumb/983569.jpg" />
      <p className="legend">John Wick</p>
    </div>
  </Carousel>
);
