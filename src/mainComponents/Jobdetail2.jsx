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

export default function Jobdetail2() {
  return (
    <>
      {/* header */}

      <Header />

      <center>
        <Home1Comp />

        <div className="jobdetail" style={{height:'1000px'}}>
          <div className="jobname">Flutter Developer</div>
          <div className="jobdescription">
            <div className="jobtype">
              <div className="jobinfo">Job Information</div>
              <div className="jobinfo-detail">
                <div className="jobinfo-icon">
                  <PersonOutlineIcon />
                </div>
                <div className="jobinfo-desc">
                  Employee Type:
                  <p className="employeetype">Full Time</p>
                </div>
              </div>
              <div className="jobinfo-detail">
                <div className="jobinfo-icon">
                  <DesktopWindowsOutlinedIcon />
                </div>
                <div className="jobinfo-desc">
                  Job Type:
                  <p className="employeetype">Flutter Developer</p>
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
                We are looking for an enthusiastic Flutter Developer who is
                focused on quality for our team. <br />
                <br />
                The ideal candidate will be responsible for developing
                high-quality applications. As a Flutter Developer, you will
                create multi-platform apps for iOS and Android
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
                  <li>Experience building and deploying high-scale production mobile apps in Flutter</li>
                  <li>
                  Participating in architectural discussions for new applications
                  </li>
                  <li>
                  Writing code using best practices, considering security and performance 
                  </li>
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
                  Graduated with a degree in Computer Science or Information Systems 
                  </li>
                  <li>
                  Portfolio with released applications
                  </li>
                  <li>
                  Samples of source code on Flutter{" "}
                  </li>
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
                    <li>Flutter</li>
                    <li>DART</li>
                    <li>Mobile App Development</li>
                    <li>Android Development</li>
                    <li>iOS App Development and Architecture</li>
                    <li>Java</li>
                    <li>Mobile App Development</li>
                    <li>Mobile application QA</li>
                    <li>Mobile App Testing (QA)</li>
                    <li>Cloud Computing</li>
                    <li>Amazon Web Services (AWS)</li>
                    <li>Firebase</li>
                    <li>API</li>
                    <li>MySQL</li>
                    <li>GitHub</li>
                    <li>RES</li>
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
