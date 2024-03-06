import React from "react";
import Header from "../component/Header";
import Home1Comp from "../component/Home1Comp";
import Footer1 from "../component/Footer1";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";

export default function Jobdetail4() {
  return (
    <>
      {/* header */}

      <Header />

      <center>
        <Home1Comp />

        <div className="jobdetail" style={{ height: "700px" }}>
          <div className="jobname">Graphic Design Internship</div>
          <div className="jobdescription">
            <div className="jobtype">
              <div className="jobinfo">Job Information</div>
              <div className="jobinfo-detail">
                <div className="jobinfo-icon">
                  <PersonOutlineIcon />
                </div>
                <div className="jobinfo-desc">
                  Employee Type:
                  <p className="employeetype">Internship</p>
                </div>
              </div>
              <div className="jobinfo-detail">
                <div className="jobinfo-icon">
                  <DesktopWindowsOutlinedIcon />
                </div>
                <div className="jobinfo-desc">
                  Job Type:
                  <p className="employeetype">Graphic Design Internship</p>
                </div>
              </div>
              <div className="jobinfo-detail">
                <div className="jobinfo-icon">
                  <BusinessOutlinedIcon />
                </div>
                <div className="jobinfo-desc">
                  Company Name:
                  <p className="employeetype">
                    eSparse Matrix Solutions Pvt Ltd
                  </p>
                </div>
              </div>
            </div>
            <div className="jobcontent">
              <div className="jobtitle">
                <DescriptionOutlinedIcon
                  fontSize="small"
                  style={{ marginBottom: 3 }}
                />
                Job Description :
              </div>
              <div className="jobtitle-desc">
                We’re looking for a <b>TRUE CREATIVE</b> with a unique point of view to
                assist our Marketing and Graphic Design Teams excel! This
                internship is a great starting place within our rapidly growing
                company.
              </div>
              <div className="jobtitle1">
                <TaskOutlinedIcon
                  fontSize="small"
                  style={{ marginBottom: 3 }}
                />
                Responsibilities and Duties:
              </div>
              <div className="jobtitle-desc1">
                <ul>
                  <li>
                  Creating graphics for the website, blogs and social media
                  </li>
                  <li>
                  Design and layout for in-house print and web publications
                  </li>
                  <li>
                  Assist designer to create ads for print and digital advertisements, when needed
                  </li>
                  <li>Assist Marketing Team with</li>
                </ul>
              </div>
              <div className="jobtitle2">
                <SchoolOutlinedIcon
                  fontSize="small"
                  style={{ marginBottom: 3 }}
                />
                Required Qualifications:
              </div>
              <div className="jobtitle-desc2">
                <ul>
                  <li>
                    Graduated with a degree in Computer Science or Information
                    Systems
                  </li>
                  <li>Portfolio with released applications</li>
                  <li>Samples of source code on Flutter </li>
                </ul>
              </div>
              <div className="jobtitle2">
                <LibraryAddCheckOutlinedIcon
                  fontSize="small"
                  style={{ marginBottom: 3 }}
                />
                Skills:
              </div>
              <div className="jobtitle-desc2">
                <ul>
                  <li>
                  Classes in Graphic Design (including digital design)
                  </li>
                  <li>
                  Experience in Adobe Lightroom, illustrator, Photoshop, InDesign required
                  </li>
                  <li>Experience with additional graphics or multimedia software (i.e. video editing) a plus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </center>
      <Footer1 />
    </>
  );
}
