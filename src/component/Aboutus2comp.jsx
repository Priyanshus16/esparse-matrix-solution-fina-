import React from "react";
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';

function Aboutus2comp(){
    return(
        <>
        <div className="cnt2">
                        <h1>Why Choose Us</h1>
                    </div>
                    <div id="box1">
                        <div className="box a">
                            <div className="box2">
                                <LibraryAddCheckOutlinedIcon htmlColor="#F7EA82"/>
                            </div>
                            One Stop Solution
                        </div>
                        <div className="box b">
                            <div className="box2">
                                <TrendingUpOutlinedIcon htmlColor="#F7EA82"/>
                            </div>
                            Continuous Improvement
                        </div>
                        <div className="box c">
                            <div className="box2">
                                <DesktopMacOutlinedIcon htmlColor="#F7EA82"/>
                            </div>
                            Strong Technical Expertise
                        </div>
                        <div className="box d">
                            <div className="box2">
                                <Groups3OutlinedIcon htmlColor="#F7EA82"/>
                            </div>
                            Priority to Client Satisfaction
                        </div>
                    </div>
        </>
    );
}

export default Aboutus2comp;
