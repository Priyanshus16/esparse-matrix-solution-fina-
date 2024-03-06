import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Home1Comp from "../component/Home1Comp";
import GetinTouchForm from "../component/GetinTouchForm";
import image1 from "../component/Mlogo/digital.png";
import image2 from "../component/Mlogo/digital1.png";
import image3 from "../component/Mlogo/digital2.png";
import image4 from "../component/Mlogo/digital3.png";
import image5 from "../component/Mlogo/digital4.png";
import image6 from "../component/Mlogo/digital5.png";
import image7 from "../component/Mlogo/digital6.png";
import image8 from "../component/Mlogo/digital7.png";
import image9 from "../component/Mlogo/digital8.png";
import image10 from "../component/Mlogo/digital9.png";

export default function Services8() {
  return (
    <>
      {/* header */}

      <Header />

      {/* content */}
      <center>
        {/* cnt1 */}

        <Home1Comp />

        {/* cnt2 */}

        <div className="digital">
          <div className="digital-header">
            eSparse Matrix 360 Digital Marketing
          </div>
          <div className="digital-para">
            With 360 marketing, marketers ensure they reach their target
            audience no matter where they hang out both online or offline.
            Depending on the type of business or products, it can involve
            various combinations of traditional and digital marketing
            channels.An efficient 360-degree marketing campaign uses various
            types of media or channels to ensure you reach most or all of your
            target audience. When creating your marketing strategy, take a
            holistic approach and make sure you touch upon every point of
            contact with your customers in their buyer’s journey.{" "}
          </div>
          <div className="digital-content">
            <div className="digital-detail">
                <center>
              <div className="digital-detail-heading">
                Search Engine Optimization (SEO)
              </div>
              <div className="digital-detail-para">
                We can assist you in achieving greater organic ranks and more
                visibility in search results through careful keyword research
                and white hat SEO techniques. Our digital marketing agency
                conducts intensive keyword research, executes on-page and
                off-page optimization, and uses Google Search Console to track
                your outcomes. As part of your digital marketing solutions,
                these approaches allow us to acquire high-quality leads and
                traffic while also increasing conversions.
              </div>
              </center>
            </div>
            <div className="digital-image">
                <img src={image1} className="img-seo1" alt="" />
                <img src={image2} className="img-seo2" alt="" />
            </div>
          </div>
          <div className="digital-content1">
            <div className="digital-image">
                <img src={image4} className="img-local1" alt="" />
                <img src={image3} className="img-local2" alt="" />
            </div>
            <div className="digital-detail1">
                <center>
              <div className="digital-detail-heading1">Local SEO</div>
              <div className="digital-detail-para1">
                Consumers searching for local companies online are more likely
                to call or visit a store within 24 hours, according to
                statistics. With eSparse digital marketing services, you can
                attract your ideal customers and generate more leads and
                revenue. Our digital marketing agency maintains consistency in
                your name, address, and phone number (NAP), improves your
                location pages, and builds local links. We also use social media
                sites to keep in front of your target audiences.
              </div>
              </center>
            </div>
          </div>
          <div className="digital-content">
            <div className="digital-detail">
                <center>
              <div className="digital-detail-heading">Technical SEO</div>
              <div className="digital-detail-para">
                With on-point technical SEO and digital marketing, you can build
                a strong online foundation. Crawl error reports are generated,
                HTTPS status codes are checked, site speed is optimised,
                redirects are audited, and duplicate material is removed by our
                technical SEO experts. We improve the crawlability and
                indexability of your website in this way. Depending on your
                needs and objectives, we may also add structured data markup to
                your website and assist with site migration.
              </div>
              </center>
            </div>
            <div className="digital-image">
                <img src={image5} className="img-seo1" alt="" />
                <img src={image6} className="img-seo2" alt="" />
            </div>
          </div>
          <div className="digital-content1">
            <div className="digital-image">
                <img src={image8} className="img-local1" alt="" />
                <img src={image7} className="img-local2" alt="" />
            </div>
            <div className="digital-detail1">
                <center>
              <div className="digital-detail-heading1">
                Social Media Marketing
              </div>
              <div className="digital-detail-para1">
                Are you ready to grow your social media audience and promote to
                them? We create social media campaigns to help your company
                expand and engage its audience. Our digital marketing agency
                determines your objectives, analyzes your competitors, and
                analyzes your customers' online activity. We create personalized
                social media brand management and paid advertising plans for
                your business based on data and analytics.
              </div>
              </center>
            </div>
          </div>
          <div className="digital-content">
            <div className="digital-detail">
                <center>
              <div className="digital-detail-heading">Email Marketing</div>
              <div className="digital-detail-para">
                How many business emails do you delete on a daily basis? Choose
                eSparse 360 Digital Marketing, and together, we'll make your
                email marketing campaigns stand out and work for you. We
                generate customized email newsletters to keep your emails from
                ending up in spam folders and to inspire your consumers to take
                the action you want them to take. Our team develops a curiosity
                gap in your emails, produces your subscriber list, tests email
                campaigns before they go out, uses power words in your content,
                and builds a subscriber list.
              </div>
              </center>
            </div>
            <div className="digital-image">
                <img src={image9} className="img-seo1" alt="" />
                <img src={image10} className="img-seo2" alt="" />
            </div>
          </div>
        </div>

        {/* cnt4 */}

        <GetinTouchForm />
      </center>

      {/* footer */}

      <Footer />
    </>
  );
}
