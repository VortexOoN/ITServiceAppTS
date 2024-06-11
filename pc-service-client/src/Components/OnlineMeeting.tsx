import React, { useState } from "react";
import { FaHeadset } from "react-icons/fa6";
import Button, { ButtonColor } from "./Button.tsx";
function OnlineMeeting(){
    return(
        <div className="container">
            <div className="row text-center mt-3 mb-3">
                <div className="col-sm-12">
                    <FaHeadset size={70}/>
                    <p className="fs-4 mt-2">Schedule online appointment and let us help <span className="fw-bold">YOU</span>.</p>
                    <Button buttonLink="" buttonText="Book" buttonColor={ButtonColor.Dark} className="px-4 py-2 fs-5"/>
                </div>
            </div>
        </div>
    )
}
export default OnlineMeeting;