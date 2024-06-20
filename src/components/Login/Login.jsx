import React from "react";

import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Wave from "react-wavify";

import "./login.css";
const Login = () => {
  return (
    <section>
      <div className="content">
        <div className="left">
          <div className="head">
            <Wave
              fill="#E88D67"
              paused={false}
              style={{ display: "flex" }}
              options={{
                height: 20,
                amplitude: 20,
                speed: 0.15,
                points: 7,
              }}
            />
            <h3>Create an account</h3>
          </div>
          <form action="">
            <input type="text" placeholder="Frist Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button>Sign Up</button>
          </form>
          <div className="socile">
            <BsInstagram style={{ color: "#AC2BAC" }} />
            <FaFacebook style={{ color: "#3B5998" }} />
            <FaGoogle />
          </div>
        </div>
        <div className="right">
          <div></div>
          <div className="welcome">
            <h3>Welcome Back To Treasure.. enjoy!</h3>
            <p>Already Have an account</p>
            <button>Login</button>
          
          </div>
          <div className="waves">
            <Wave
              fill="#625E5E"
              paused={false}
              options={{
                height: 60,
                amplitude: 20,
                speed: 0.15,
                points: 7,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
