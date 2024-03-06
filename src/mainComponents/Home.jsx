import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Home1Comp from "../component/Home1Comp";
import Home3Comp from "../component/Home3Comp";
import GetinTouchForm from "../component/GetinTouchForm";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import MobileFriendlyOutlinedIcon from "@mui/icons-material/MobileFriendlyOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import Home5Comp from "../component/Home5Comp";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const software = () => {
    navigate("/services7");
  };
  const web = () => {
    navigate("/services1");
  };
  const app = () => {
    navigate("/services2");
  };
  const erp = () => {
    navigate("/services6");
  };
  const hrms = () => {
    navigate("/services4");
  };
  const crm = () => {
    navigate("/services5");
  };
  return (
    <>
      {/* HEADER */}
      <Header />

      <center>
        {/* CONTENT */}
        <Home1Comp />

        {/* OUR SERVICES */}

        <div className="servicesmain">
          <div className="servicesheading">
            <h1>Our Services</h1>
          </div>
          <div className="allboxes">
            <div id="Hbox1">
              <div className="Hbox">
                <div className="Hboxinside">
                  <h5 className="Hboxheading">
                    Software <br /> Developement
                  </h5>
                  <div className="textbtn">
                    <p>
                      {" "}
                      Explore -----------{" "}
                      <button
                        className="explorebtn"
                        style={{ textAlign: "center" }}
                        onClick={() => software()}
                      >
                        <CallMadeOutlinedIcon fontSize="small" />
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="Hbox">
                <div className="Hboxinside">
                  <h5 className="Hboxheading">
                    Web <br /> Developement
                  </h5>
                  <div className="textbtn">
                    <p>
                      {" "}
                      Explore -----------{" "}
                      <button
                        className="explorebtn"
                        style={{ textAlign: "center" }}
                        onClick={() => web()}
                      >
                        <CallMadeOutlinedIcon fontSize="small" />
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="Hbox">
                <div className="Hboxinside">
                  <h5 className="Hboxheading">
                    App <br /> Developement
                  </h5>
                  <div className="textbtn">
                    <p>
                      {" "}
                      Explore -----------{" "}
                      <button
                        className="explorebtn"
                        style={{ textAlign: "center" }}
                        onClick={() => app()}
                      >
                        <CallMadeOutlinedIcon fontSize="small" />
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="Hbox">
                <div className="Hboxinside">
                  <h5 className="Hboxheading">
                    ERP <br /> Software
                  </h5>
                  <div className="textbtn">
                    <p>
                      {" "}
                      Explore -----------{" "}
                      <button
                        className="explorebtn"
                        style={{ textAlign: "center" }}
                        onClick={() => erp()}
                      >
                        <CallMadeOutlinedIcon fontSize="small" />
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="Hbox">
                <div className="Hboxinside">
                  <h5 className="Hboxheading">
                    ESPARSE <br /> HRMS Software
                  </h5>
                  <div className="textbtn">
                    <p>
                      {" "}
                      Explore -----------{" "}
                      <button
                        className="explorebtn"
                        style={{ textAlign: "center" }}
                        onClick={() => hrms()}
                      >
                        <CallMadeOutlinedIcon fontSize="small" />
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="Hbox">
                <div className="Hboxinside">
                  <h5 className="Hboxheading">
                    ESPARSE <br /> CRM Software
                  </h5>
                  <div className="textbtn">
                    <p>
                      {" "}
                      Explore -----------{" "}
                      <button
                        className="explorebtn"
                        style={{ textAlign: "center" }}
                        onClick={() => crm()}
                      >
                        <CallMadeOutlinedIcon fontSize="small" />
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="allboxes">
            <div id="Hbox1"></div>
          </div>
        </div>

        <Home3Comp />

        {/* OUR APPROACH */}

        <div className="approach">
          <h1 className="approachheading">Our Approach</h1>
          <div id="lbox1">
            <div className="lbox">
              <div className="imagecontent">
                <div className="logobox">
                  <Diversity2OutlinedIcon htmlColor="#F7EA82" />
                </div>
                <div className="logocontent">
                  <h5 className="approachelement"> Discuss and Analysis </h5>
                  <p>
                    Together with our software developers and analysts, we begin
                    by discussing and analyzing our client’s needs, sketching
                    the outline of the desired software development services,
                    identifying gaps and proposing Software development
                    solutions along the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="lbox">
              <div className="imagecontent">
                <div className="logobox">
                  <DriveFileRenameOutlineOutlinedIcon htmlColor="#F7EA82" />
                </div>
                <div className="logocontent">
                  <h5 className="approachelement"> Prototyping </h5>
                  <p>
                    We help our clients and their end-users visualize the
                    look-and-feel and interaction of the finished product before
                    it is actually built using state-of-the-art design and
                    prototyping tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="lbox">
              <div className="imagecontent">
                <div className="logobox">
                  <DesktopMacOutlinedIcon htmlColor="#F7EA82" />
                </div>

                <div className="logocontent">
                  <h5 className="approachelement"> Software Specification </h5>
                  <p>
                    We write a Software development specifications document
                    (Software development blueprint) that ensures that our
                    clients get exactly what they expected Software development
                    services and agreed to - in terms of functionality and the
                    product’s UI and UX design.
                  </p>
                </div>
              </div>
            </div>

            <div className="lbox">
              <div className="imagecontent">
                <div className="logobox">
                  <ComputerOutlinedIcon htmlColor="#F7EA82" />
                </div>
                <div className="logocontent">
                  <h5 className="approachelement">
                    {" "}
                    Software Developement Approach{" "}
                  </h5>
                  <p>
                    We use agile software development style alongside the
                    traditional approaches to ensure reliability of delivery
                    schedule and quality of the end product.
                  </p>
                </div>
              </div>
            </div>
            <div className="lbox">
              <div className="imagecontent">
                <div className="logobox">
                  <MobileFriendlyOutlinedIcon htmlColor="#F7EA82" />
                </div>
                <div className="logocontent">
                  <h5 className="approachelement">
                    {" "}
                    Rapid Application Developement{" "}
                  </h5>
                  <p>
                    Our software developers make use of cutting-edge tools and
                    software development frameworks to ensure quality code
                    construction in the shortest time possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="lbox">
              <div className="imagecontent">
                <div className="logobox">
                  <LaunchOutlinedIcon htmlColor="#F7EA82" />
                </div>
                <div className="logocontent">
                  <h5 className="approachelement"> Launch and Support </h5>
                  <p>
                    Our software development team is exceptionally skilled in
                    planning the deployment and maintenance of large, complex,
                    and high-visibility software development systems and mobile
                    apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RECENT PROJECT */}

        <Home5Comp />

        <GetinTouchForm />
      </center>

      <Footer />
    </>
  );
}
