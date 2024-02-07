import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import filmData from "./../../data/filmData";
import ButtonGroup from "./../ButtonGroup";
export const MovieSlider = ({ allFilm }) => {
  const [sliderMovie, setSliderMovie] = useState([]);

  useEffect(() => {
    const filterSlide = allFilm.filter((movie) => movie.isSlider === true);
    setSliderMovie(filterSlide);
  }, [allFilm]);
  console.log(sliderMovie);

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
    const mappedSlider=fi
  };
  return (
    <div>
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
        <div className="top-movie-card">
          {/* <img src="src/assets/images/thumbnails/Wedaj.jpg" /> */}
          <h2>{filmData[1].amharicTitle}</h2>
          <h3>{filmData[1].rating}</h3>
        </div>
        
        <div className="top-movie-card" style={{backgroundImage:`url(${})`}}>
         
        </div>
        
      </Carousel>
    </div>
  );
};
