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

export default function Jobdetail8() {
  return (
    <>
      {/* header */}

      <Header />

      <center>
        <Home1Comp />

        <div className="jobdetail" style={{ height: "750px" }}>
          <div className="jobname">Digital Marketing Internship</div>
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
                  <p className="employeetype">Digital Marketing Intern</p>
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
                Digital Marketing Intern will get an opportunity to learn/work
                multiple aspects of the internet business within an extremely
                competitive environment, develop hands-on skills on E-Commerce
                Store administration, Search Engine Optimization, Building Buyer
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
                    Optimize content for the website and social networking
                    accounts such as Facebook and Twitter.
                  </li>
                  <li>
                    Track and analyze website traffic flow and provide regular
                    internal reports.
                  </li>
                  <li>Attain key performance indicators. </li>
                  <li>Plan and execute all digital marketing.</li>
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
                  <li>Google Analytics</li>
                  <li>Digital Marketing</li>
                  <li>Search Engine Optimization (SEO)</li>
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
