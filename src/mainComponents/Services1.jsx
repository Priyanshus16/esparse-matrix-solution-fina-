import React from "react";
import imge1 from "../component/Mlogo/image11.png";
import imge2 from "../component/Mlogo/image12.png";
import imge3 from "../component/Mlogo/image13.png";
import imge4 from "../component/Mlogo/image14.png";
import imge5 from "../component/Mlogo/image15.png";
import imge6 from "../component/Mlogo/image16.png";
import Header from "../component/Header";
import Home1Comp from "../component/Home1Comp";
import Footer1 from "../component/Footer1";
import Home5Comp from "../component/Home5Comp";
function Services1() {
  return (
    <>

    {/* header */}

    <Header />

    <center>
    {/* cnt1 */}

    <Home1Comp />
      <div className="main">
        <div className="services-main">
          <div className="services-heading">Website Development</div>
          <div className="services-content">
            <p>
              eSparse Matrix Solutions Pvt Ltd is a leading Web & Software
              development company in Pune which provides best software
              development services. We help our clients to convert their
              business processes into the workflow-based application. Having the
              right web & software for your business will not only solve the
              issues, which the businesses are facing but also, will have an
              edge over your competitors
              <br />
              <br />
              We have a team of Software developers who have in-depth knowledge
              in available software development tools like C, C++, Client/Server
              Programming, database concepts, MFC, SQL and windows internals C#,
              Linux/Unix, Web Services, Web Sockets, SVN, etc. Dedicated
              Developers for each requirements like Portal, Web Portal, CMS,
              E-Commerce, CRM, ERP, Database, Document Management System
              Development, Saas Application and Much more.
            </p>
          </div>
        </div>
        <div className="features">
          <div className="features-heading">Our Features</div>
          <div className="features-content">
            <div className="features-content-box">
              <div className="box-heading">Responsive Website Design</div>
              <div className="box-image">
                <img className="wd-image" src={imge1} alt="" />
              </div>
              <div className="box-content">
                Static website designing services provided by the Nextwebi, it’s
                a website which does not have database good for small
                businesses.
              </div>
            </div>
            <div className="features-content-box">
              <div className="box-heading">Static Website Design</div>
              <div className="box-image">
                <img className="wd-image2" src={imge2} alt="" />
              </div>
              <div className="box-content">
                Static website designing services provided by the Nextwebi, it’s
                a website which does not have database good for small
                businesses.
              </div>
            </div>
            <div className="features-content-box">
              <div className="box-heading">Dynamic Website Design</div>
              <div className="box-image">
                <img className="wd-image3" src={imge3} alt="" />
              </div>
              <div className="box-content">
                Static website designing services provided by the Nextwebi, it’s
                a website which does not have database good for small
                businesses.
              </div>
            </div>
            <div className="features-content-box">
              <div className="box-heading">CMS</div>
                <div className="box-image">
                  <img className="wd-image" src={imge4} alt="" />
                </div>
                <div className="box-content">
                    Static website designing services provided by the Nextwebi,
                    it’s a website which does not have database good for small
                    businesses.
                </div>
            </div>
            <div className="features-content-box">
              <div className="box-heading">API Integration</div>
                <div className="box-image">
                  <img className="wd-image5" src={imge5} alt="" />
                </div>
                <div className="box-content"> 
                Static website designing services provided by the Nextwebi,
                    it’s a website which does not have database good for small
                    businesses.</div>
              </div>
            <div className="features-content-box">
              <div className="box-heading">E - Commerce</div>
                <div className="box-image">
                  <img className="wd-image" src={imge6} alt="" />
                </div>
                <div className="box-content">
                    Static website designing services provided by the Nextwebi,
                    it’s a website which does not have database good for small
                    businesses.
                </div>
            </div>
          </div>
        </div>
      </div>

      <Home5Comp />
    </center>

    {/* footer */}

    <Footer1 />
    </>
  );
}

export default Services1;