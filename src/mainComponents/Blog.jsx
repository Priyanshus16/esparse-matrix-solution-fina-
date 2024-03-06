import React from "react";
import Header from "../component/Header";
import Footer1 from "../component/Footer1";
import img from "../component/Mlogo/image2.png";
import img1 from "../component/Mlogo/image3.png";
import img2 from "../component/Mlogo/image4.png";
import img3 from "../component/Mlogo/image5.png";
import img4 from "../component/Mlogo/image7.png";
import img5 from "../component/Mlogo/image6.png";
import { Button } from "bootstrap";

function Blog() {
  return (
    <>
      {/* header */}

      <Header />

      {/* content */}

      <center>
        <div className="blog-content">
          <div className="blog-title">Blog</div>
          <div className="blog-content-detail">
            <div className="blog-info">
              <div className="blog-info-heading">
                The Top 5 CRM Software for Small Businesses
              </div>
              <div className="blog-info-para">
                Growth is the main obstacle for small businesses. And by growth,
                we mean greater visibility, more clients, professionals,
                and—most importantly—revenue. And as is widely known, a lot
                needs to happen when working toward this p...
              </div>
              <a href="#" style={{textDecoration:'none'}}>Read More</a>
            </div>
            <div className="blog-img">
              <div className="img-crm1">
                <img src={img} alt="" className="crm1" />
              </div>
              <div className="img-crm2">
                <img src={img1} alt="" className="crm2" />
              </div>
            </div>
          </div>
          <div className="blog-content-detail1">
            <div className="blog-img">
              <div className="img-aero1">
                <img src={img2} className="aero1" alt="" />
              </div>
              <div className="img-aero2">
                <img src={img3} className="aero2" alt="" />
              </div>
            </div>
            <div className="blog-info1">
              <div className="blog-info-heading1">
                The Top 10 Travel Websites in India
              </div>
              <div className="blog-info-para1">
                There's no denying that we have been travelling for ages, hasn't
                there?
                <br />
                We can unwind, revive, and renew our minds and body when
                we visit new areas. The deathly fear of waiting in long lines at
                airports and for a long...
              </div>
              <a href="#" style={{textDecoration:'none'}}>Read More</a>
            </div>
          </div>
          <div className="blog-content-detail">
            <div className="blog-info">
              <div className="blog-info-heading">
                Why digital marketing is important for coaching institutes
              </div>
              <div className="blog-info-para">
                The days when students could only get advice from traditional
                coaching institutes are long gone. The education sector is
                developing its digital landscape at a time when every industry
                is considering and implementi...
              </div>
              <a href="#" style={{textDecoration:'none'}}>Read More</a>
            </div>
            <div className="blog-img">
              <div className="img-crm1">
                <img src={img4} alt="" className="crm1" />
              </div>
              <div className="img-crm2">
                <img src={img5} alt="" className="crm2" />
              </div>
            </div>
          </div>
        </div>
      </center>

      {/* footer */}

      <Footer1 />
    </>
  );
}

export default Blog;
