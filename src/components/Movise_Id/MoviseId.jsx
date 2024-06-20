import React, { useEffect, useState } from "react";
import {  useParams   } from "react-router-dom";
import "./moviesId.css";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const MoviseId = () => {
  const pramse = useParams();

  const api_url = `https://moviesapi.runasp.net/api/Movies/GetByIdAsync`;
  const api_data = "https://moviesapi.runasp.net/api/Movies/GetAllAsync"
  const [movie, setMovie] = useState({});
  const [showData, setShowData] = useState([]);

  async function allData (){
    const {data} = await axios.get(`${api_data}`)
    setShowData(data)
    console.log(data)
  }
 
  useEffect(() => {
    fetch(`${api_url}/${pramse.moviseid}`)
      .then((res) => res.json())
      .then((item) => setMovie(item));
      allData ()
  }, []);


  // const [similarMovies, setSimilarMovies] = useState([]);

  // useEffect(() => {
  //   fetch(`${api_url}/${movieid}`)
  //     .then((res) => res.json())
  //     .then((item) => setMovie(item));
  // }, [movieid]);

  // useEffect(() => {
  //   if (movie.movieGenres) {
  //     fetchSimilarMovies(movie.movieGenres);
  //   }
  // }, [movie.movieGenres]);

  // const fetchSimilarMovies = (genres) => {
  //   fetch(`https://moviesapi.runasp.net/api/Movies/GetByGenreAsync?genre=${genres}`)
  //     .then((res) => res.json())
  //     .then((data) => setSimilarMovies(data));
  // };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };


  return (
    <section className="sec-bg">
      <div className="header">
        <img src={movie.movieCoverImage} alt={movie.title} />
        <div className="des">
          <h2>the story of the movie</h2>
          <p>{movie.description}</p>
        </div>
      </div>
      <div className="content">
        <div className="top">
          <div className="left">
            <img src={movie.movieImage} alt={movie.title} />
          </div>
          <div className="right">
            <h5>
              Release year : <span> {movie.releaseYear}</span>
            </h5>
            <h5>
              Precision: <span>1080</span>{" "}
            </h5>
            <h5>
              Views : <span>{movie.mostWatched}</span>
            </h5>
            <h5>
              Ratting : <span>{movie.imDbRating}</span>
            </h5>

          </div>
        </div>

        <div className="video">
          <ReactPlayer
            url={movie.trailerLink}
            controls
            width={800}
            height={500}
          />
        </div>
     
      </div>
      {/* <div className="similar-movies">
        <h2>Similar Movies</h2>
        <Slider {...settings}>
          {similarMovies.map((similarMovie) => (
            <div key={similarMovie.id}>
              <img src={similarMovie.movieImage} alt={similarMovie.title} />
              <h3>{similarMovie.title}</h3>
            </div>
          ))}
        </Slider>
      </div> */}
    
    </section>
  );
};

export default MoviseId;
