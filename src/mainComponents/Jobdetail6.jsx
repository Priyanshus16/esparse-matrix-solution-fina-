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

export default function Jobdetail6() {
  return (
    <>
      {/* header */}

      <Header />

      <center>
        <Home1Comp />

        <div className="jobdetail" style={{ height: "800px" }}>
          <div className="jobname">App Development Internship</div>
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
                  <p className="employeetype">App Development Intern</p>
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
                We are looking for an enthusiastic mobile app developer intern
                to join our IT department and provide creative ideas to help
                achieve the goals. Develop application programming interfaces
                (APIs) to support mobile functionality.
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
                  <li>Developing, documenting, and discussing implementation plans .</li>
                  <li>Access new application ideas.</li>
                  <li>Research competitor offerings. </li>
                  <li>Develop applications (coding, programming).</li>
                  <li>Interview beta testers.</li>
                  <li>Work with developers too.</li>
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
                B.E/B.TECH/BCS/BCA/ME/MTECH/MCS/MCA
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
                  <li>Python</li>
                  <li>MongoDB</li>
                  <li>REST API</li>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Bootstrap</li>
                  <li>Codeigniter</li>
                  <li>Angular JS</li>
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
