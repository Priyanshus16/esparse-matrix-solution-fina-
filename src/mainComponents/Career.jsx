import React from "react";
import Header from "../component/Header";
import Footer1 from "../component/Footer1";
import Home1Comp from "../component/Home1Comp";
import { useNavigate } from "react-router";

function Career(){
    const navigate = useNavigate();

    const gotowebdev = () => {
        navigate('/jobdetail1')
    }

    const gotoflutterdev =() =>{
        navigate('/jobdetail2')
    }
    const gotoui = () =>{
        navigate('/jobdetail3')
    };
    const gotographic = () =>{
        navigate('/jobdetail4')
    }
    const gotoandroid = () =>{
        navigate('/jobdetail5')
    }
    const gotoapp = () =>{
        navigate('/jobdetail6')
    }
    const gotosoftware = () =>{
        navigate('/jobdetail7')
    }
    const gotomarketing = () =>{
        navigate('/jobdetail8')
    }
    const gotoappdev = () =>{
        navigate('/jobdetail9')
    }
    return(
        <>
        {/* header */}

        <Header />

        {/* content */}

        <center>

            {/* content1 */}

            <Home1Comp />

            {/* cnt2 */}

            <div className="recommended-job">
                <div className="recommended-job-content">Recommended Job :</div>
                <div className="job-container">
                    <div className="job-box a3">
                        <div className="job-box-duration">Full Time</div>
                        <div className="job-type">Website Developer</div>
                        <div className="job-requirement">Requirements : 
                        <ul className="unorderedlist">
                            <li>1-2 year experience</li>
                        </ul>
                        </div>
                        <div className="job-button-container"><button className="job-button" onClick={() => gotowebdev()}>View Details</button></div>
                    </div>
                    <div className="job-box b3">
                        <div className="job-box-duration">Full Time</div>
                        <div className="job-type">Flutter Developer</div>
                        <div className="job-requirement">Requirements : 
                        <ul className="unorderedlist">
                            <li>1-2 year experience</li>
                        </ul>
                        </div>
                        <div className="job-button-container"><button className="job-button" onClick={() => gotoflutterdev()}>View Details</button></div>
                    </div>
                    <div className="job-box c3">
                        <div className="job-box-duration">Internship</div>
                        <div className="job-type">UI /UX Internship</div>
                        <div className="job-requirement">Requirements : 
                        {/* <div className="job-requirement-exp"> */}
                        <ul className="unorderedlist">
                            <li>Fresher</li>
                        </ul>
                        {/* </div> */}
                        </div>
                        <div className="job-button-container"><button className="job-button" onClick={() => gotoui()} >View Details</button></div>
                    </div>
                    <div className="job-box d3">
                        <div className="job-box-duration">Internship</div>
                        <div className="job-type">Graphic Design Inter</div>
                        <div className="job-requirement">Requirements : 
                        <ul className="unorderedlist">
                            <li>0-1 year experience</li>
                        </ul>
                        </div>
                        <div className="job-button-container"><button className="job-button4" onClick={() => gotographic()} >View Details</button></div>
                    </div>
                    <div className="job-box e3">
                        <div className="job-box-duration">Internship</div>
                        <div className="job-type">Andriod Developer</div>
                        <div className="job-requirement">Requirements : 
                        <ul className="unorderedlist">
                            <li>1-2 year experience</li>
                        </ul>
                        </div>
                        <div className="job-button-container"><button className="job-button" onClick={() => gotoandroid()}>View Details</button></div>
                    </div>
                    <div className="job-box f3">
                        <div className="job-box-duration">Internship</div>
                        <div className="job-type">APP Development</div>
                        <div className="job-requirement">Requirements : 
                        <ul className="unorderedlist">
                            <li>0-1 year experience</li>
                        </ul>
                        </div>
                        <div className="job-button-container"><button className="job-button" onClick={() => gotoapp()} >View Details</button></div>
                    </div>
                    <div className="job-box g3">
                        <div className="job-box-duration">Internship</div>
                        <div className="job-type">Software Develop</div>
                        <div className="job-requirement">Requirements : 
                        <ul className="unorderedlist">
                            <li>0-1 year experience</li>
                        </ul>
                        </div>
                        <div className="job-button-container"><button className="job-button" onClick={() => gotosoftware()} >View Details</button></div>
                    </div>
                    <div className="job-box i3">
                        <div className="job-box-duration">Internship</div>
                        <div className="job-type">Digital Marketing </div>
                        <div className="job-requirement">Requirements : 
                        <ul className="unorderedlist">
                            <li>0-1 year experience</li>
                        </ul>
                        </div>
                        <div className="job-button-container"><button className="job-button" onClick={() => gotomarketing()}>View Details</button></div>
                    </div>
                    <div className="job-box j3">
                        <div className="job-box-duration">Internship</div>
                        <div className="job-type">Human Resource</div>
                        <div className="job-requirement">Requirements : 
                        <ul className="unorderedlist">
                            <li>0-1 year experience</li>
                        </ul>
                        </div>
                        <div className="job-button-container"><button className="job-button" onClick={() => gotoappdev()}>View Details</button></div>
                    </div>
                </div>
            </div>
        </center>
        
        {/* footer */}

        <Footer1 />
        </>
    );
}

export default Career;
