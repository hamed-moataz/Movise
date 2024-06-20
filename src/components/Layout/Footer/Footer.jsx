import React from 'react'
import './Footer.css'

import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='footer'>
        <div className="container">
          <div className="socile">
          <FaFacebook style={{color:"#3B5998"}} />
          <BsInstagram style={{color: "#AC2BAC"}} />
          <FaTwitterSquare style={{color: "#55ACEE"}} />
          <IoLogoGithub  />

          </div>
          <div className="date">
         <h6> © {year} Copyright: Movies.com </h6>
          </div>
        </div>
    </div>
  )
}

export default Footer
