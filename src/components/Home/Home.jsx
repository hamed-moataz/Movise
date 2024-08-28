import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

// ============ icon ================
import { FaStar } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

// import './styles.css';
import "./Home.css";
import axios from "axios";

const Home = () => {
  const api = "https://moviesapi.runasp.net/api/Movies/GetAllAsync";
  const api_catogrey = "https://moviesapi.runasp.net/api/Genre/GetAllAsync";
  const api_poster =
    "https://moviesapi.runasp.net/api/Movies/GetCoverHomeAsync";
  const [showData, setShowData] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [poster, setPoster] = useState([]);
  async function getAllData() {
    const { data } = await axios.get(`${api}`);
    setShowData(data);
    const res = await axios.get(`${api}`);
    setData(res.data.reverse());
  }
  
  async function getCatogrey() {
    try {
      const { data } = await axios.get("https://moviesapi.runasp.net/api/Genre/GetAllAsync",{
        withCredentials: true,
      });
      setCategory(data);
    } catch (error) {
      console.error("Error fetching category data", error);
    }
  }
  async function getPoster() {
    const { data } = await axios.get(`${api_poster}`);
    setPoster(data);
  }

  useEffect(() => {
    getAllData();
    getCatogrey();
    getPoster();
  }, []);


  const filterBtn = async (catName) => {
    const res = await axios.get(
      `https://moviesapi.runasp.net/api/Movies/GetAllWithGenresAsync?genreName=${catName}`
    );

    setShowData(res.data);
  };

  return (
    <div className="home">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        className="mySwiper"
      >
        {poster.map((movies) => (
          <SwiperSlide key={movies.id}>
            <img src={movies.movieImage} alt={movies.title} loading="lazy" />
            <div className="detils">
              <h3>{movies.title}..!</h3>
              <p>{movies.description.substring(0, 200)}...</p>
              <NavLink to={`/${movies.id}`}>
                {" "}
                <FaRegPlayCircle
                  style={{
                    fontSize: "22px",
                    color: "#fff",
                    marginRight: "5px",
                  }}
                />{" "}
                Watching
              </NavLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="sectionTwo">
        <div className="link">
          <ul>
            <li onClick={() => getAllData()}>
              <NavLink to="/">Most watched</NavLink>
            </li>
            {category.map((cat, index) => {
              return (
                <li key={index}>
                  <NavLink
                    onClick={() => {
                      filterBtn(cat.genresName);
                    }}
                  >
                    {cat.genresName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/* <ul>
            <li>
              <NavLink to="/">Most watched</NavLink>
            </li>
            <li>
              <NavLink to="/Fantasy">Fantasy</NavLink>
            </li>
            <li>
              <NavLink to="/Drama">Drama </NavLink>
            </li>
            <li>
              <NavLink to="/fiction">Science fiction</NavLink>
            </li>
            <li>
              <NavLink to="/Romantic">Romantic </NavLink>
            </li>
            <li>
              <NavLink to="/Horror">Horror </NavLink>
            </li>
            <li>
              <NavLink to="/Science">Science fiction </NavLink>
            </li>
            <li>
              <NavLink to="/Comedy">Comedy </NavLink>
            </li>
            <li>
              <NavLink to="/More">More </NavLink>
            </li>
          </ul> */}
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2000,
          }}
          modules={[FreeMode, Autoplay, Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          {showData.map((item) => (
            <SwiperSlide key={item.id}>
              <NavLink to={`/${item.id}`} className="con">
                <img src={item.movieImage} alt={item.title} />
                <div className="detiles">
                  <div className="watch">
                    <div className="icon">
                      <h5>{item.title.substring(0, 22)} </h5>
                      <div></div>
                    </div>
                    <div className="btn">
                      <span
                        style={{
                          color: "#fff",
                          paddingInline: "5px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {item.imDbRating}
                        <FaStar style={{ color: "#DC5F00" }} />
                      </span>
                      <NavLink to={`/${item.id}`}>
                        <button className="detil">
                          {" "}
                          <FaRegPlayCircle
                            style={{
                              fontSize: "22px",
                              color: "#fff",
                              marginRight: "5px",
                            }}
                          />
                          Watched
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
        <h2 className="trending">
          <FiTrendingUp style={{ margin: "5px" }} />
          Trending
        </h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
          }}
          modules={[FreeMode, Autoplay, Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <NavLink to={`/${item.id}`} className="con">
                <img src={item.movieImage} alt={item.title} loading="lazy" />
                <div className="detiles"></div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
