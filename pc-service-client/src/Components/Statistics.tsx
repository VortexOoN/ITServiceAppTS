import React from "react";
import Card from "./Card.tsx";
import StatPanel from "./StatPanel.tsx";
function Statistics() {
    return (
        <div className="container-fluid statistics-section">
            <div className="container" >
                <div className="row text-start mt-5 mb-5">
                    <div className="col-lg-12">
                        <span className="statistics-section-title display-1">OptiPC by the numbers</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1">
                        <span className="d-block fs-5 fw-bold">All time</span>
                    </div>
                    <div className="col-lg-11">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <StatPanel className="" description="Employees" number="560" />
                    </div>
                    <div className="col-lg-3">
                        <StatPanel className="" description="Customers" number="32.5K" />
                    </div>
                    <div className="col-lg-3">
                        <StatPanel className="" description="Users" number="205.5K" />
                    </div>
                    <div className="col-lg-3">
                        <StatPanel className="" description="Recomendations" number="10K" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1">
                        <span className="d-block fs-5 fw-bold">In 2023</span>
                    </div>
                    <div className="col-lg-11">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <StatPanel className="word-break" description="Emails sent" number="23,500,000,000" />
                    </div>
                    <div className="col-lg-1">

                    </div>
                    <div className="col-lg-5">
                        <StatPanel className="word-break" description="Payment processed" number="$2,500,400,000" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-1">
                        <span className="d-block fs-5 fw-bold">Fun facts</span>
                    </div>
                    <div className="col-lg-11">
                        <hr />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-3">
                        <div className="img-fluid ">
                            <Card cardImage="./images/about_us/school.jpg"
                                cardTitle=""
                                cardText="Every month, our team hosts free technology workshops for local schools,
                                supporting technological education within the community.">

                            </Card>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <Card cardImage="./images/about_us/world.jpg"
                            cardTitle=""
                            cardText="Our IT solutions are utilized by clients worldwide,
                            spanning over 20 countries across various continents.">
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card cardImage="./images/about_us/customer-service.jpg"
                            cardTitle=""
                            cardText="Our customer support team has an average response time of less than 30 minutes,
                            ensuring quick assistance and problem resolution.">
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card cardImage="./images/about_us/partnership.jpg"
                        cardTitle=""
                        cardText="We collaborate with leading technology firms to deliver the latest solutions and technologies
                        to our clients.">  
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Statistics;