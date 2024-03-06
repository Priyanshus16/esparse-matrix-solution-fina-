import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Home1Comp from "../component/Home1Comp";
import Home3Comp from "../component/Home3Comp";
import GetinTouchForm from "../component/GetinTouchForm";
import img10 from "../component/Mlogo/arrow.png";
import Aboutus2comp from "../component/Aboutus2comp";

function AboutUs() {
    return (
        <>
            {/* HEADER */}

            <Header/>
            
            
            <center>

            {/* HOME FIRST COMPONENT */}

            <Home1Comp />

            {/* content1 */}
            
                <div className="content">

                    {/* Aboutus2comp */}

                    <Aboutus2comp />
                    

                    {/* HOME 3 COMPONENT */}

                    <Home3Comp/>
                    
                    <div className="cnt4">
                        <div className="event1">
                            <div className="news">Esparse Matrix Solutions News & Events</div>
                            <div className="news1">
                                We Have some interesting upcoming News & Events for the
                                developers and related to the development.
                            </div>
                        </div>
                        <div className="event2">
                            <div className="cnt4-box e">
                                <div className="eventname"></div>
                                <div className="eventname1">
                                    Event Name
                                    <div className="detail-cnt4">Lorem ipsum dolor sit...</div>
                                    <div className="btn2">
                                        <button type="button" className="btn3">
                                            <img src={img10} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="cnt4-box f">
                                <div className="evntname">
                                    Event Name
                                    <div className="detail-cnt4">Lorem ipsum dolor sit...</div>
                                    <div className="btn2">
                                        <button type="button" className="btn3">
                                            <img src={img10} alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="evntname1"></div>
                            </div>
                            <div className="cnt4-box g">
                                <div className="eventname"></div>
                                <div className="eventname1">
                                    Event Name
                                    <div className="detail-cnt4">Lorem ipsum dolor sit...</div>
                                    <div className="btn2">
                                        <button type="button" className="btn3">
                                            <img src={img10} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    {/* GET IN TOUCH FORM */}

                    <GetinTouchForm/>

                    {/* FOOTER */}

                    <Footer/>

                </div>
            </center> 
            
        </>
    );
}
export default AboutUs;
