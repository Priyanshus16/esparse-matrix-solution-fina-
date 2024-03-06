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

export default function Jobdetail5() {
  return (
    <>
      {/* header */}

      <Header />

      <center>
        <Home1Comp />

        <div className="jobdetail" style={{ height: "600px" }}>
          <div className="jobname">Andriod Developer</div>
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
                  <p className="employeetype">Andriod Developer</p>
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
                We Esparse Matrix Solutions Team are working on Various Projects
                like Websites Design & Development, Mobile applications
                Developments, software Developments, ERP Development, and
                digital marketing services.
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
                  Support in the end to end delivery of app features by using the latest architecture, design patterns and writing secure and performant code.
                  </li>
                  <li>
                  Developing, releasing, and maintaining Android Application and oversee mobile application
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
                  Bachelor's degree in computer science or related field or equivalent education and experience
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
                  <li>Kotlin</li>
                  <li>
                    Java
                  </li>
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
