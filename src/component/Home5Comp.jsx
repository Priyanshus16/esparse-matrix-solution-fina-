import React from "react";
// import img1 from "../component/Mlogo/image17.png";
// import img2 from "../component/Mlogo/image18.png";
// import img3 from "../component/Mlogo/image19.png";
// import img4 from "../component/Mlogo/image20.png";
// import img5 from "../component/Mlogo/image21.png";

export default function Home5Comp() {
  return (
    <>
      <center>
        <div className="parent">
          <div className="recentproject">
            <center>
              <div className="recent-project-detail">
                <div className="recentdesc1">The Projects recent we do.</div>
                <div className="recentdesc2">
                  The Projects on which we have worked and show skills and interested
                  in doing more on projects in the upcoming days.
                </div>
              </div>
            </center>
          </div>

          <div className="overlap">
            <div className="overlapbox x1">
              <img
                // src={img1}
                alt=""
                width={240}
                height={260}
                style={{ marginTop: "7px" }}
              />
            </div>
            <div className="overlapbox x2">
              <img
                // src={img2}
                alt=""
                width={220}
                height={110}
                style={{ marginTop: "15px" }}
              />
              <img
                // src={img3}
                alt=""
                width={220}
                height={110}
                style={{ marginTop: "15px" }}
              />
            </div>
            <div className="overlapbox x3">
              <img
                // src={img5}
                alt=""
                width={240}
                height={260}
                style={{ marginTop: "7px" }}
              />
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
