import React from "react";
import Header from "../component/Header";
import Footer1 from "../component/Footer1";

function Contactus() {
  return (
    <>
      {/* header */}

      <Header />

      {/* center */}

      <center>
        <div className="contactus-cnt1">
          <div className="map">
            <iframe className="map-image"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4167857950497!2d73.76220707368299!3d18.64528406535578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c359982581%3A0x7981a7c5d2397867!2seSparse%20Matrix%20Solutions%20Pvt%20Ltd%20%7C%20software%20company!5e0!3m2!1sen!2sin!4v1685983247086!5m2!1sen!2sin"
              width="98%"
              height="45%"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="get-in-touch">
            <form className="form1">
              <div className="contact-us">Get In Touch !</div>
              <div className="contactus-detail a2">
                <input
                  type="text"
                  className="contactus-input-box"
                  name=""
                  required=""
                />
                <label>Your Name</label>
              </div>
              <div className="contactus-detail b2">
                <input
                  type="tel" maxLength={10}
                  className="contactus-input-box"
                  name=""
                  required=""
                />
                <label>Mobile</label>
              </div>
              <div className="contactus-detail c2">
                <input
                  type="email"
                  // pattern="[a-z,A-Z,0-9,@,.]"
                  className="contactus-input-box"
                  name="email"
                  required=""
                />
                <label>Your E-mail</label>
              </div>
              <div className="contactus-detail d2">
                <input
                  type="text"
                  className="contactus-input-box"
                  name=""
                  required=""
                />
                <label>Subject</label>
              </div>
              <div className="contactus-detail e2">
                {/* <input type="textarea" rows="10" cols="40" className="contactus-comment" name="" required="" /> */}
                <textarea
                  name="textarea"
                  rows={4}
                  cols={40}
                  className="contactus-comment"
                ></textarea>
                <label className="comment1">Comments</label>
              </div>
            </form>
            <div className="contactus-submit f2">
              <button className="contactus-msg">Send Message</button>
            </div>
          </div>
        </div>
      </center>

      {/* footer */}

      <Footer1 />
    </>
  );
}

export default Contactus;