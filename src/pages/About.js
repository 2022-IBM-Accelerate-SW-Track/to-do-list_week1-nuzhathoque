import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/nmh.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            // Image goes here
            src={profile_pic_name}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Nuzhat</div>
          <div className="brief_description">
            <p>Rising Junior at Lewis and Clark College studying CS/Math. Love to read books and spend time with family and friends</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}