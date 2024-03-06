import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Home1Comp from "../component/Home1Comp";

function Services2() {
  return (
    <>
      {/* header */}

      <Header />

      {/* content */}

      <center>
        {/* cnt1 */}

        <Home1Comp />

        {/* cnt2 */}

        <div className="appdev">
          <div className="appdev-heading">App Developement</div>
          <div className="appdev-para">
            Mobile Apps are making a major contribution to bringing Digital
            Transformation in the Business World while creating a rapid Buzz.
            Mobile Apps are one of the crucial parts of the Digital
            Transformation Strategy, which is efficiently digitalizing your
            business while improving the engagement of your Target Audience.
            Having a Business app is a must for every growing company as it
            provides Great User Experience while allowing you to reach your
            Tech-savvy Audience. So that our Team eSparse Matrix Solutions Pvt.
            Ltd. is offering you to unlock interactive mobile experiences for
            your customers at a budget-friendly price. We assure you that Using
            iOS mobile apps developed by one of the most trusted Mobile App
            Development Company in India will lead your company towards healthy
            finances with higher revenue and increased ROI. Keep your business
            ahead of Digital Transformation!
          </div>
        </div>

        {/* cnt3 */}

        <div className="industries-app">
          <div className="industries">
            <div className="industries-content">
              <div className="industries-heading">Industries we Serve</div>
              <div className="industries-para">
                We partner with a variety of mobile application platforms to
                help you support all customers in the most efficient way
                possible, including:
              </div>
            </div>
            <div className="industries-box-container">
              <div className="industries-box">Healthcare</div>
              <div className="industries-box">Logistics</div>
              <div className="industries-box">Education</div>
              <div className="industries-box">Retail</div>
              <div className="industries-box">Finance</div>
              <div className="industries-box">Wellness & Fitness</div>
              <div className="industries-box">Oil & Gas </div>
              <div className="industries-box">Transportation</div>
              <div className="industries-box">Travel</div>
              <div className="industries-box">Social Network</div>
              <div className="industries-box">Event</div>
              <div className="industries-box">Productivity</div>
            </div>
          </div>
          <div className="app">Our Apps</div>
        </div>

        <div className="app-content">
          <div className="app-image">Image</div>
          <div className="app-detail">
            <div className="app-name">Platform App</div>
            <div className="app-detail-about">
              Welcome to a unique live streaming experience. Listen live to
              amazing talent from across the world in the palm of your hands.
              Live stream DJs, recording artists, singers, bands and much more
              using PLATFORM. This application allows up and coming artist to
              play to millions around the world, gain popularity and grow a
              following.
            </div>
            <button className="app-redirect-btn">Download the App</button>
          </div>
        </div>
        <div className="app-content1">
          <div className="app-detail1">
            <div className="app-name">Tailor App</div>
            <div className="app-detail-about">
              Tailor App is an android application for tailors.In which tailor
              can maintain record of the whole business like customer detail,
              customer measurement detail
            </div>
            <button className="app-redirect-btn">Download the App</button>
          </div>
          <div className="app-image1">Image</div>
        </div>
        <div className="app-content">
          <div className="app-image">Image</div>
          <div className="app-detail">
            <div className="app-name">SportZeal App</div>
            <div className="app-detail-about">
              MySportClubz app gives you ability to Login and track club
              members, Manage invoice/billing, fees structure, coaching charges,
              Manage customer enquiries, Manage expenses, Manage events and much
              more
            </div>
            <button className="app-redirect-btn">Download the App</button>
          </div>
        </div>
        <div className="app-content1">
          <div className="app-detail1">
            <div className="app-name">Sparse Invoice App</div>
            <div className="app-detail-about">
              Sparse Invoice App is an android application for generate
              invoice.In which user can generate invoice , generate quotation
              and share to the clients.As well as update quotation also.
            </div>
            <button className="app-redirect-btn">Download the App</button>
          </div>
          <div className="app-image1">Image</div>
        </div>
      </center>

      {/* footer */}

      <Footer />
    </>
  );
}

export default Services2;
