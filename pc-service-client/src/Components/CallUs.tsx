import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import Button, { ButtonColor } from "./Button.tsx";
function CallUs(){
    return(
        <div className="container-fluid mb-2 p-3">
            <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <BiPhoneCall size={100}/>
                    <p className="fs-4">Need technical assistance? Let us help <span className="fw-bold">YOU.</span></p>
                </div>
            </div>
                <div className="row text-center">
                    <div className="col-sm-12">
                        <Button buttonLink="" buttonText="Call Us" buttonColor={ButtonColor.Dark} className="px-4 py-2 fs-5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CallUs;