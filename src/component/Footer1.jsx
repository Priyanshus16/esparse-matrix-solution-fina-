import React from "react";
import img1 from "./logos/facebook.png";
import img2 from "./logos/instagram.png";
import img3 from "./logos/twittwr.png";
import img4 from "./logos/linkedin.png";
import img5 from "./logos/youtube.png";
import { useNavigate } from "react-router";

export default function Footer1() {
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/");
  };

  const gotoaboutus = () => {
    navigate("/about");
  };

  const gotoservices = () => {
    navigate("/services");
  };

  const gotocareer = () => {
    navigate("/career");
  };

  const gotoblog = () => {
    navigate("/blog");
  };

  const gotocontactus = () => {
    navigate("/contactus");
  };

  return (
    <>
      {/* FOOTER */}

      <div id="footer1">
        {/* <!-- f --> */}
        <footer className="text-center text-lg-start  text-muted">
          {/* <!-- Section: Social media --> */}
          <section className="d-flex justify-content-center justify-content-lg-between p-3 " />

          {/* </section>  */}
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem"></i>Esparse Matrix Solutions Pvt Ltd
                  </h6>
                  <p>
                    Esparse Matrix Solution Private Limited is a software
                    development company based in India that serves clients all
                    over the world. We concentrated on providing innovative
                    resources to help clients expand.
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      onClick={() => gotohome()}
                      style={{ textDecoration: "none" }}
                    >
                      Home
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      onClick={() => gotoaboutus()}
                      style={{ textDecoration: "none" }}
                    >
                      About Us
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      onClick={() => gotoservices()}
                      style={{ textDecoration: "none" }}
                    >
                      Services
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      onClick={() => gotocareer()}
                      style={{ textDecoration: "none" }}
                    >
                      Careers
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      onClick={() => gotoblog()}
                      style={{ textDecoration: "none" }}
                    >
                      Blog
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      onClick={() => gotocontactus()}
                      style={{ textDecoration: "none" }}
                    >
                      Contact Us
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Term & Services
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Disclaimer
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Sitemap
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home"></i> 133/1, Spectrum Building,
                    Gurudwara Colony, Akurdi, Pune-411033
                  </p>
                  <p>
                    <i className="fas fa-envelope "></i>
                    eSparsematrix@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone"></i>(+91) 8459694413
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div
            className=" p-4 "
            style={{ backgroundColor: "#000000", color: "#F7EA82" }}
          >
            <a href="#!" onClick={() => gotohome()} style={{ textDecoration: "none", color:"#F7EA82" }}>eSparse Matrix Solutions Pvt Ltd.</a>&nbsp;&nbsp;All Rights Reserved. 2023
            
            <div className="logos mx-5">
              <a href="https://www.facebook.com/esparsematrixsolutions">
                <img className="logo mx-3" src={img1} alt="fb" />
              </a>
              <a href="https://www.instagram.com/esparse_matrix_solutions/">
                <img className="logo mx-3" src={img2} alt="insta" />
              </a>
              <a href="https://twitter.com/MatrixSparse?t=6fkj7UqivroUGLOb3piNig&s=08">
                <img className="logo mx-3" src={img3} alt="twitter" />
              </a>
              <a href="https://www.linkedin.com/company/sparse-matrix-solutions/mycompany/">
                <img className="logo mx-3" src={img4} alt="linkedin" />
              </a>
              <a href="https://www.youtube.com/channel/UCmmkB3zOe1d7g6FvXqtGcQw">
                <img className="logo mx-3" src={img5} alt="youtube" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
