import React from "react";
function RepairPrices() {
    return (
        <>
            <div className="container-fluid service-panels-section">
                <div className="row">
                    <h1 className="display-1 text-center">Service Prices:</h1>
                </div>
                <div className="container">
                    <hr />
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-between align-items-center ">
                            <span className="text-start fs-4">
                                Laptop maintenance (professional cleaning of the cooling system + the entire laptop)
                            </span>
                            <span className="text-end fs-4 text-primary fw-bold">100 PLN</span>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12 d-flex justify-content-between align-items-center">
                            <span className="text-start fs-4">
                                Replacement of USB, AUDIO, FIRE WIRE, LAN, VGA, HDMI Ports
                            </span>
                            <span className="text-end fs-4 text-primary fw-bold">80 PLN</span>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12 d-flex justify-content-between align-items-center">
                            <span className="text-start fs-4 ">
                                Replacing the BGA chip
                            </span>
                            <span className="text-end fs-4 text-primary fw-bold">150 PLN + BGA Cost</span>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12 d-flex justify-content-between align-items-center">
                            <span className="text-start fs-4">
                                Motherboard repair – electronic or mechanical failure
                            </span>
                            <span className="text-end fs-4 text-primary fw-bold">from 50 PLN </span>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12 d-flex justify-content-between align-items-center">
                            <span className="text-start fs-4">
                                Remote repair (connection up to 30 minutes)
                            </span>
                            <span className="text-end fs-4 text-primary fw-bold">80 PLN</span>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12 d-flex justify-content-between align-items-center">
                            <span className="text-start fs-4">
                                Remote repair (connection up to 60 minutes)
                            </span>
                            <span className="text-end fs-4 text-primary fw-bold">120 zł</span>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12 d-flex justify-content-between align-items-center">
                            <span className="text-start fs-4 ">
                                Each additional 30 minutes started (remote repair)
                            </span>
                            <span className="text-end fs-4 text-primary fw-bold">60 zł</span>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 text-center fs-1 mb-4 text-uppercase mt-2">
                        <span>If your desired service is not on the list, it means that you need to contact us, for <span className="text-primary">further consultation</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default RepairPrices;