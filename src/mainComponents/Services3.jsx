import React from "react";
import Header from "../component/Header";
import Footer1 from "../component/Footer1";
import Home1Comp from "../component/Home1Comp";
import img1 from "../component/Mlogo/image8.png";
import img2 from "../component/Mlogo/image9.png";
import img3 from "../component/Mlogo/image10.png"; 

function Services3() {
  return (
    <>
      {/* header */}

      <Header />

      {/* content */}

      <center>
        {/* cnt1 */}

        <Home1Comp />

        {/* cnt2 */}

        <div className="manufacturing">
          <div className="manufact-heading1">
            What is Sparse Manufacturing ERP?
          </div>
          <div className="manufact-para">
            Sparse Manufacturing ERP is a system that manages a manufacturing
            company’s processes, such as Sales & Purchase, Production Process,
            Inventory, HR Activities, Accounting and more. By Using Sparse
            Manufacturing ERP, All these processes integrate into one single
            system so to provide real-time Data/ information with multiple
            departments so businesses can Increase production efficiency, save
            costs & maximize profits with Sparse Manufacturing ERP software.
          </div>
        </div>
          <div className="manufact-heading2">
            What are the Benefits of Sparse Manufacturing ERP?
          </div>
          <div className="manufact-box-container">
            <div className="manufact-box a5">
              <div className="manufact-box-logo"><img src={img1} alt="" /></div>
              <div className="manufact-box-heading">Increased Productivity</div>
              <div className="manufact-box-para">
                P Automate business processes, so businesses can Increase
                production efficiency, save costs & maximize profits
              </div>
            </div>
            <div className="manufact-box b5">
              <div className="manufact-box-logo"><img src={img2} alt="" /></div>
              <div className="manufact-box-heading">Real-time Reporting</div>
              <div className="manufact-box-para">
                Act on insights, improve performance and share results with
                real-time business and financial reporting.
              </div>
            </div>
            <div className="manufact-box c5">
              <div className="manufact-box-logo"><img src={img3} alt="" /></div>
              <div className="manufact-box-heading">Data Secured</div>
              <div className="manufact-box-para">
                All The data are highly secured on cloud
              </div>
            </div>
          </div>
        <div className="client">
          <div className="client-content">
            <div className="client-detail">
              <div className="client-heading">Our Clients</div>
              <div className="client-para">
                Our Client is valuable and we understand clients business so we
                are contributed towards Clients Satisfacton.
              </div>
            </div>
            <div className="client-box-container">
              <div className="client-box">Logo</div>
              <div className="client-box">Logo</div>
              <div className="client-box">Logo</div>
              <div className="client-box">Logo</div>
              <div className="client-box">Logo</div>
              <div className="client-box">Logo</div>
            </div>
          </div>
        </div>
      </center>

      {/* footer */}

      <Footer1 />
    </>
  );
}

export default Services3;
