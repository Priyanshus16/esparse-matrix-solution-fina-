import React from "react";
import Header from "../component/Header";
import Footer1 from "../component/Footer1";
import Home1Comp from "../component/Home1Comp";

export default function Services6() {
  return (
    <>
      {/* header */}

      <Header />

      {/* content */}

      <center>
        {/* cnt1 */}

        <Home1Comp />

        {/* cnt2 */}

        <div className="school-erp">
          <div className="erp-heading">Why eSparse School ERP?</div>
          <div className="erp-para">
            A school ERP is a collection of computer instructions, specially
            designed to manage the day-to-day administrative tasks of schools.
            School management software allow schools to digitally monitor the
            daily activities along with managing all the resources and
            information on a single platform. In contemporary, most of schools
            are using school managements software to increase efficiency,
            productivity, and hence saving a lot of time involved to carry out
            various administrative operations.
          </div>
        </div>

        {/* cnt3 */}

        <div className="erp-container">
          <div className="erp-benefits">
            <div className="erp-content">
              <div className="erp-bene-heading">
                Key Benefits of Sparse School/College ERP
              </div>
              <div className="erp-bene-para">
                The benefits of sPARSE school/College ERP are unlimited. The
                ERP's user interface is an adventure in and of itself. To ensure
                the implementation and maintenance of each module, the ERP's
                modules are interconnected but separate.
              </div>
            </div>
            <div className="erp-box-container">
              <div className="erp-box1 y1">
                <div className="erp-box-heading">Cloud Based ERP</div>
                <div className="erp-box-para">
                  Sparse School/College ERP is a cloud-based solution that
                  provides cloud storage that can be accessed anytime, anywhere,
                  and on any device, removing the need for schools to invest in
                  and maintain expensive infrastructure and servers, reducing
                  overall costs.
                </div>
              </div>
              <div className="erp-box2 y2">
                <div className="erp-box-heading">Real Time Data Availability</div>
                <div className="erp-box-para">
                  Parents and school officials will access real-time tracking
                  data on students and school transportation. During pickup and
                  drop, parents receive SMS updates with the time and place.
                </div>
              </div>
              <div className="erp-box3 y3">
                <div className="erp-box-heading">24/7 Support Team</div>
                <div className="erp-box-para">
                  Our customer service team is always available to answer your
                  questions and assist your organization.
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
