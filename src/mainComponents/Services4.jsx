import React from "react";
import Header from "../component/Header";
import Home1Comp from "../component/Home1Comp";
import Footer1 from "../component/Footer1";

function Services4() {
  return (
    <>
      {/* header */}

      <Header />

      {/* content */}

      <center>
        {/* cnt1 */}

        <Home1Comp />

        {/* cnt2 */}

        <div className="about-hrms">
          <div className="about-hrms-header">About eSparse HRMS Solutions</div>
          <div className="about-hrms-para">
            A modern organization's most critical and cost-intensive role is
            human resource management. The HR department is often burdened with
            cumbersome documentation and monotonous duties due to its various
            roles, which include recruiting, resource control, and employee
            grievance redressal. Esparse HRMS Solutions has developed a
            formidable reputation for delivering customised HRMS solutions.
            Esparse HRMS is a one-stop shop for all HR needs, including
            recruiting, employee database management, leave tracking, payroll
            management, preparation, and success management. Since each client
            is different in terms of team size, processes, and specifications,
            each HRMS Module is customised to meet the specific needs of the
            client customers.
          </div>
        </div>

        {/* cnt3 */}

        <div className="hrms-container">
          <div className="hrms-features">
            <div className="hrms-content">
              <div className="hrms-heading">
                Esparse HRMS's Solutions Key Features
              </div>
              <div className="hrms-para">
                Human resources are unique and provide a significant competitive
                edge to every business. In today's demanding climate, attracting
                and keeping the best workforce has been the most difficult task.
                The Esparse HRMS allows smooth incorporation between
                departmental, intra-departmental, and entity levels.
              </div>
            </div>
            <div className="hrms-box-container">
              <div className="hrms-box box-1">
                <div className="hrms-box-heading">RECRUITMENT</div>
                <div className="hrms-box-para">
                  HR may receive input from different agencies on employee
                  preparation, yearly and ad - hoc personnel needs. The HRMS
                  assists management workers with handling resume databases,
                  credentials, and interacts with career portals.
                </div>
              </div>
              <div className="hrms-box box-2">
                <div className="hrms-box-heading">PEFORM MANAGEMENT</div>
                <div className="hrms-box-para">
                  Esparse HRMS aids in the development of employee evaluation
                  records on a regular basis. Any employee's efficiency
                  parameters can be identified using HRMS. Promotions,
                  preparation, and right-sizing will all benefit from the data.
                </div>
              </div>
              <div className="hrms-box box-3">
                <div className="hrms-box-heading">EMPLOYEE SELF SERVICES</div>
                <div className="hrms-box-para">
                  Employee self-services such as copying pay stubs, arranging
                  for tax savings and investments, scheduling trips, internal
                  communications, and outdoor activities can all be efficiently
                  managed with adjustable schedules.
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>

      {/* footer */}

      <Footer1 />
    </>
  );
}

export default Services4;
