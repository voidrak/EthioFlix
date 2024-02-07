import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import filmData from "./../../data/filmData";
import ButtonGroup from "./../ButtonGroup";
export const MovieSlider = ({ allFilm }) => {
  const [sliderMovie, setSliderMovie] = useState([]);

  useEffect(() => {
    const filterSlide = allFilm.filter((movie) => movie.isSlider === true);
    const orderSlide = filterSlide.sort((a, b) => b.rating - a.rating);
    setSliderMovie(orderSlide);
  }, [allFilm]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 765 },
      items: 1,
    },
    mobileLarge: {
      breakpoint: { max: 765, min: 481 },
      items: 1,
    },
    mobileSmall: {
      breakpoint: { max: 481, min: 0 },
      items: 1,
    },
  };

  const mappedSlider = allFilm.map((movie) => (
    <div
      className="top-movie-card"
      key={movie.id}
      style={{ backgroundImage: `url(${movie.image})` }}
    >
      <div className="small-image">
        <img src={movie.image} alt={movie.EnglishTitle} />
      </div>
      <div className="movie-info">
        <div className="play-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
          </svg>

          <div className="title-rating">
            <h1>{movie.amharicTitle}</h1>
            <div className="rating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h2>{movie.rating.toFixed(1)}</h2>
            </div>
          </div>
        </div>
        <p className="movie-description">
          ይህንን አማርኛ ጽሑፍ በማስተካከል በግልጽ መልክ ላይ ግንባር ተሳታፊነት ያለውን አዋቂ ጽሑፍ ማየት አለባቸው
          በአዲስ የግልጽ ገጽ ላይ የተጠቀሙት የስልክ መሳሪያዎችን በግልጽ ምሳሌዎች መቀየር አለባቸው አማርኛ ጽሑፍ
          በየትኛውም አገር ውስጥ ለመግባት በሚሻል ነው
        </p>
      </div>
      <div className="card-shadow"></div>
    </div>
  ));

  return (
    <div className="movie-slider">
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
        sliderClass="slider-class"
        infinite={true}
        dotListClass="dot-list"
        customTransition="transform 0.5s ease-in-out"
        customButtonGroup={<ButtonGroup />}
      >
        {mappedSlider}
      </Carousel>
    </div>
  );
};
