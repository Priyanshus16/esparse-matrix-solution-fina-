import React from "react";
import image from "../component/logos/homeimg.png";

export default function Home1Comp() {
  return (
    <>
      <div className="main-cnt1">
        <div className="maincontainer">
          <div className="homecontainer">
            <h5 className="tagline mb-3">Trust by 100+ of Companies</h5>
            <div className="heading mb-4">
              <h1 className="homecontainerheading">
                Take complex applications simple for users
              </h1>
            </div>
            <div style={{ width: "90%" }} className="content">
              eSparse Matrix Solutions Private Limited is a Best Software
              Development Company that includes Enterprise Software development,
              Website designing and development, Mobile application development,
              Digital marketing.
              <br />
              Our approach to development is that of excellence, relevance,
              accessibility and usability and we have the team of expert team to
              build the kind of business solution that will suit your company
              needs.
            </div>

            {/* BUTTONS */}
            <center>
              <div className="buttoncontainer">
                <button className="letstalk">Lets talk</button>
                <button className="project mx-3">Projects</button>
              </div>
            </center>
          </div>
          <div className="homeimg my-5 ">
            <div className="home-box1"></div>
            <img src={image} className="home-box-image" width="70%" alt="" />
          </div>
          <div className="home-box2"></div>
          <div className="home-box3"></div>
        </div>
      </div>
    </>
  );
}
