import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Frame() {
    return (
        <>
            <Header />
            <div className="wholediv">
                <div className="communitymain">
                    <div className="communitypara">
                        <div className="communityheading"><h3>eSparse Matrix Solutions Private Limited
                            Join Our Talent Community</h3></div>
                        <div className="communitydesc"> <p> ⁕ Fresher or experienced, we welcome all. We offer excellent training opportunity with timely feedback system to help you do better. We are always looking to add talented people to our work force who have the zeal to succeed and thrive in a dynamic world of technology. Come join us, we would love to have you on board and provide you with opportunities to grow with us.</p>
                            <p>⁕ Can’t find what you looking for? Do tell us about the kind of work which interests you. Leave your details and we shall notify you when matching career opportunities open up.</p>
                            <a href="">Join Us & Explore the Possibilities</a>
                        </div>
                    </div>
                </div>

                {/* CARRIER FORM */}
                <div className="careerformmain">
                    <div className="careerformheading">
                        <h5> -------- Career Portal</h5>
                        <br />
                        <h2 className="Carrierformheading">ESPARSE MATRIX SOLUTIONS </h2>
                        <br />
                        <h6>Sign in to your account</h6>
                        <br />
                    </div>
                    <div className="careerform">
                        <label><h6>Your Email</h6></label> <br />
                        <input type="text" className="input-box" name="" required="" />

                        <br /><br />
                        <label><h6>Password</h6></label> <br />
                        <input type="text" className="input-box" name="" required="" /> <br />

                        <div className="checkbox pb-3"><input type="checkbox" name="Remember me" id="" /> <span>Remember Me</span> </div>
                        
                        <h6>Forgot Password ?</h6>

                        <button className="signupbtn my-3">Sign in</button>

                    </div>
                    <a href="">Powered by eSparse Matrix Solution</a>
                </div>
            </div>

            {/* FOOTER */}

            <Footer/>
        </>
    )
}