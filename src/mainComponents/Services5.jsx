import React from "react";
import Header from "../component/Header";
import Footer1 from "../component/Footer1";
import Home1Comp from "../component/Home1Comp";

export default function Services5() {
  return (
    <>
      {/* header */}

      <Header />

      {/* content */}

      <center>
        {/* cnt1 */}

        <Home1Comp />

        {/* cnt2 */}

        <div className="about-crm">
          <div className="crm-heading">About ESPARSE CRM</div>
          <div className="crm-para">
            Esparse CRM software creates new tasks for your team. Automate
            everything from appointment reminders to follow-up emails by putting
            your calendar online. With complete contact views, deal tracks,
            real-time DATA, and other features, you can achieve a significantly
            higher ROI. In the Sales CRM, the contact timeline contains all of
            the relevant details about the customer's progres.
          </div>
        </div>

        {/* cnt3 */}

        <div className="crm-container">
          <div className="crm-features">
            <div className="crm-content">
              <div className="crm-feat-heading">Esparse CRM Key Features</div>
              <div className="crm-feat-para">
                Esparse CRM allows you to concentrate on the steps that lead to
                it. Schedule calls, texts and Esparse Sales CRM will tell you
                what to focus on.Plan all of the company teams' workdays. As a
                result, they will focus on doing better, growing their
                effectiveness.Quickly and conveniently share quotations, deals,
                and scheduling details.
              </div>
            </div>
            <div className="crm-box-container">
              <div className="crm-box crm-1">
                <div className="crm-box-heading">CONTACT MANAGEMENT</div>
                <div className="crm-box-para">
                  Manage your clients, prospects, and vendors, as well as all of
                  your contacts and follow-up activities.
                </div>
              </div>
              <div className="crm-box crm-2">
                <div className="crm-box-heading">SALES PIPELINE MANAGEMENT</div>
                <div className="crm-box-para">
                  Keep track of the sales leads and prioritise them in the sales
                  process.
                </div>
              </div>
              <div className="crm-box crm-3">
                <div className="crm-box-heading">REPORTING</div>
                <div className="crm-box-para">
                  With a single click, create detailed management information
                  reports.
                </div>
              </div>
              <div className="crm-box crm-4">
                <div className="crm-box-heading">SALES QUOTATIONS</div>
                <div className="crm-box-para">
                  Create quotes based on your business opportunities and deliver
                  them to your clients directly.
                </div>
              </div>
              <div className="crm-box crm-5">
                <div className="crm-box-heading">IMPORTING LEADS FOR EXCEL</div>
                <div className="crm-box-para">
                  Can you have a large amount of data to import? You can
                  conveniently import data using our bulk import function by
                  simply importing an excel file.
                </div>
              </div>
              <div className="crm-box crm-6">
                <div className="crm-box-heading">USER ROLES AND PROFILES</div>
                <div className="crm-box-para">
                  You will control which users in your company have access to
                  which data and fields. You have full control of what things
                  they can see and what decisions they can take.
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
