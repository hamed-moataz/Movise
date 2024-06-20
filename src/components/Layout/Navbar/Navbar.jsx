import "./Navbar.css";
import img1 from "../../../assets/2.png";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <nav>
          <div className="icon">
            <h2>
              Mo<span>vise</span>
            </h2>
            <img src={img1} alt="img" />
          </div>
          <div className="links">
            <ul className={open ? "open" : ""}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
               Movies
              </li>
              <li>
                News
              </li>
              <li>
             Reviews
              </li>
            </ul>
          </div>
          <div className="search">
            <CiSearch style={{ fontSize: "1.3rem" }} />
            <input type="text" placeholder="Find your favorite movie.." />
          </div>
          <div className="bars">
            <FaBars
              style={{ fontSize: "22px", color: "#DC5F00", marginRight: "5px" }}
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
