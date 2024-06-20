import React from 'react'
import './watched.css'
import { NavLink } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



const Watched = () => {
  return (
    <>
          <div className='sectionTwo'>
        <div className="link">
          <ul>
            <li >
              <NavLink to='/'>Most watched</NavLink>
            </li>
            <li>
              <NavLink to='/Fantasy'>Fantasy</NavLink>
            </li>
            <li>
              <NavLink to='/Drama'>Drama </NavLink>
            </li>
            <li>
              <NavLink to='/fiction'>Science fiction</NavLink>
            </li>
            <li>
              <NavLink to='/Romantic'>Romantic </NavLink>
            </li>
            <li>
              <NavLink to='/Horror'>Horror </NavLink>
            </li>
            <li>
              <NavLink to='/Science'>Science fiction </NavLink>
            </li>
            <li>
              <NavLink to='/Comedy'>Comedy  </NavLink>
            </li>
            <li>
              <NavLink to='/More'>More  </NavLink>
            </li>
          </ul>
        </div>
        <div className="swip">
        <Swiper
       slidesPerView={3}
       spaceBetween={30}
       freeMode={true}
       pagination={{
         clickable: true,
       }}
       modules={[FreeMode, Pagination]}
       className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
      </div>
    </>
  )
}

export default Watched
