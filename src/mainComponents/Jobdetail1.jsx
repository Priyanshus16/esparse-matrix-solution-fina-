import React from "react";
import Header from "../component/Header";
import Home1Comp from "../component/Home1Comp";
import Footer1 from "../component/Footer1";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';

export default function Jobdetail1() {
  return (
    <>
      {/* header */}

      <Header />

      <center>
        <Home1Comp />

        <div className="jobdetail">
          <div className="jobname">Website Developer</div>
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
                  <p className="employeetype">Website Developer</p>
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
                The ideal candidate is a creative problem solver who will work
                in coordination with cross-functional teams to design, develop,
                and maintain our next generation websites and web tools. You
                must be comfortable working as part of a team while taking the
                initiative to take lead on new innovations and projects.
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
                    <li>Revise, edit, proofread & optimize web content</li>
                    <li>Work with
                cross-functionally to enhance overall user experience of our
                platforms</li>
                <li>Own various design tasks involved in the web
                development life cycle from start to finish Qualifications</li>
                <li>Architect, design, develop, and assist in the development of web
                application to support internal and external clients and
                stakeholders</li>
                <li>Collaborate with a team of developers to design
                end-to-end, industry-leading systems and solutions</li>
                <li>Rapidly prototype new ideas, concepts, and designs</li>
                <li>Work with agile
                development methodologies adhering to best practices and
                pursuing continued learning opportunities</li>
                <li>Designing software
                system architecture.</li>
                <li>Writing tested, idiomatic, and documented
                JavaScript, HTML and CSS</li>
                <li>Completing data structures and design
                patterns.</li>
                <li>Troubleshooting and bug fixing.</li>
                <li>Identifying
                bottlenecks and improving software efficiency.</li>
                <li>Writing
                technical documents.</li>
                <li>Ensuring cross-platform optimization for
                mobile phones.</li>
                <li>Meeting both technical and consumer needs.</li>
                <li>Seeing through a project from conception to finished product.</li>
                <li>Ensuring responsiveness of applications.</li>
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
                    <li>B.Sc /Diploma /BE / MCA / MCS in IT or Computer Science or related equivalent degree or qualification</li>
                    <li>Must have 1-5 year of experience in developing web application using PHP technologies. Fresher can also apply. </li>
                    <li>Hands on experience and extensive knowledge on JavaScript,REST, Websockets, Typescript, CSS2/CSS3 HTML/HTML5 and jQuery. </li>
                    <li>Expert knowledge of SQL and database technologies • Must be knowledgeable in various frameworks such as Code Ignitor, Zend, Laravel etc • Experience working in a lean/agile development environment with remote teams </li>
                    <li>Exceptional communication, organization, and leadership skills </li>
                    <li>Have expertise in multiple browser development, web usability, and interface design </li>
                    <li>Developing responsive web design with mobile-first approach. </li>
                    <li>Develop reusable code and maintain the code going forward. </li>
                    <li>Provide input to help improve site architecture, layout, and content. </li>
                    <li>Familiarity with SQL/NoSQL databases </li>
                    <li>Knowledge on ASP. Net</li>
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
              JavaScript, CSS2/CSS3 HTML/HTML5 ,jQuery,Code Ignitor, Zend, laravel ,ASP. Net, My SQL,PHP
              </div>
            </div>
          </div>
        </div>
      </center>
      <Footer1 />
    </>
  );
}
