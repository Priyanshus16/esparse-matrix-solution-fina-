import React from "react";
import Header from "../component/Header";
import Home1Comp from "../component/Home1Comp";
import Aboutus2comp from "../component/Aboutus2comp";
import Footer1 from "../component/Footer1";

function Services7() {
  return (
    <>
      {/* header */}

      <Header />

      {/* content */}

      <center>
        {/* cnt1 */}

        <Home1Comp />

        {/* cnt2 */}

        <div className="about-custom">
          <div className="about-custom-heading">
            About CUSTOM SOFTWARE DEVELOPMENT SERVICES
          </div>
          <div className="about-custom-para">
            Due to our extensive expertise, team of trained experts, core
            industry knowledge, and committed operating procedure, we are a
            leading custom software development firm that provides top-rated
            custom software development services. We recognise that every
            business has unique software specifications, and we provide a wide
            range of software development services to meet those needs.
          </div>
        </div>

        {/* cnt3 */}

        <Aboutus2comp />
      </center>

      {/* footer */}

      <Footer1 />
    </>
  );
}

export default Services7;
