import React from "react";
import Slider from "react-slick";


const movies = [
  {
    title: "The Suicide Squad",
    desc: "Supervillains Harley Quinn, Bloodsport, Peacemaker join Task Force X...",
    img: "/public/flower_1.avif",
  },
  {
    title: "Spider-Man: Far From Home",
    desc: "Peter Parker faces new multiverse threats...",
 img: "/public/flower_1.avif",
  },
  {
    title: "Thor: Ragnarok",
    desc: "Thor must defeat Hela and escape Sakaar...",
     img: "/public/flower_1.avif",
  },
  {
    title: "Justice League",
    desc: "Batman & Wonder Woman recruit metahumans...",
     img: "/public/flower_1.avif",
  },
];

export default function HeroCarousel() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2200,
    speed: 800,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    dots: true,
    focusOnSelect: true,
    pauseOnHover: false,
    beforeChange: (current, next) => setActive(next),
  };

  const [active, setActive] = React.useState(1);

  return (
    <div className="hero-carousel-container">
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div
            key={index}
            className={`slider-card ${active === index ? "activeSlide" : "sideSlide"}`}
          >
            <img src={movie.img} alt={movie.title} className="slider-img" />

            {active === index && (
              <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.desc}</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
