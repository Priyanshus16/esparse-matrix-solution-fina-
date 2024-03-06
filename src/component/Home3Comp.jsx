import React, { useState } from "react";
import img9 from "../component/Mlogo/image1.png";

export default function Home3Comp() {
  const [readmore,setreadmore] = useState('none');

  return (
    <>
      <div className="cnt3">
        {/* <center> */}
          <div className="cnt3-imgb">
            <div className="img-cnt3-cont">
              <div className="cnt3-box"></div>
              <img src={img9} className="img-cnt3" alt="" />
            </div>

            <div className="brand">
              <div className="cnt3Heading">
                We design digital products , brands and Expriences
              </div>
              <div className="cnt3para">
                Our approach to software development is that of excellence,
                relevance, accessibility and usability and we have the software
                development and digital marketing team of expert to build the
                kind of business software development solution that will suit
                your company’s needs. We are continuously finding ways to
                provide best software development and digital marketing solution
                to client with recent cutting edge technology.
                <br />
                <span className="readmore" style={{display:readmore}}>
                We distinguish ourselves from the others as we have a single
                minded focus on software development that communicate the
                business objectives simply while our user oriented functionality
                is designed to satisfy both the client and user expectations.
                </span>
                <br/>
                {readmore === 'none'?
                <span onClick={()=>setreadmore('block')} style={{cursor:'pointer', color:'blue'}}>See More  </span>
                :
                <span onClick={()=>setreadmore('none')} style={{cursor:'pointer',color:'blue'}}>See Less  </span>
              }
              </div>
            </div>
          </div>
        {/* </center> */}
      </div>
    </>
  );
}
