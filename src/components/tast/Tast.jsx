import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Swiper ,SwiperSlide } from 'swiper/react'
// Import Swiper styles
import "swiper/css";
import { Pagination  ,FreeMode, Autoplay, Navigation} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { NavLink } from 'react-router-dom';


const Tast = () => {
    const [showData , setShowData] = useState([])
    async function getAllData(){
        const {data} = await axios.get("https://moviesapi.runasp.net/api/Movies/GetAllAsync")
        setShowData(data)
        console.log(data)
        
    }
    useEffect(()=>{
        getAllData()
    }, [])
  return (
    <div className='row g-5 ms-5 my-5 gx-5 '>
       <Swiper
         slidesPerView={4}
         spaceBetween={30}
         freeMode={true}
         breakpoints={{
           320:{
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
             slidesPerView: 3,
             spaceBetween: 20,
           },
           1400: {
             slidesPerView: 4,
             spaceBetween: 50,
           },
         }}
         modules={[FreeMode, Autoplay, Pagination, Navigation]}
         navigation={true}
         className="mySwiper"
      >
       
      {
        showData.map((item)=>(
          <SwiperSlide key={item.id}>
          <img src={item.movieImage} alt={item.title}/>
          <div className="detils">
            <h3>{item.title}</h3>
        
            <NavLink to={item.trailerLink}><button>Watching</button></NavLink>
          </div>
        </SwiperSlide>
     

                
        ))
      }
     
      </Swiper>
    </div>
  )
}

export default Tast
