import React from "react";
import "./Dashboard.css";
import img_admin from "../../assets/admin.png";

const Dashboard = () => {
  return (
    <section>
      <div className="container">
        <div className="content ">
          <div className="left">
            <img src={img_admin} alt="" />
          </div>
          <div className="right">
            <form className="add">
              <h2>Add Movies</h2>
              <input type="text" placeholder="Enter Name Movie..." />
              <div className="data">
                <input list="browsers" name="browser" id="browser"  placeholder="Choose a categotry..."/>
                <datalist id="browsers">
                  <option value="Action "></option>
                  <option value="Adventure "></option>
                  <option value="Comedy "></option>
                  <option value="Drama "></option>
                  <option value="Fantasy "></option>
                  <option value="Horror  "></option>
                  <option value="Mystery  "></option>
                  <option value="Romance  "></option>
                  <option value="Sci-Fi - "></option>
                  <option value="Thriller  "></option>
                </datalist>
              </div>
              <label htmlFor="">Upload prodact images</label>
              <button><input type="file" /></button>
            </form>
            <button>Add Movies</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
