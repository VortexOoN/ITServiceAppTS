import React from "react";
function AboutInfo() {
    return (
        <div className="container-fluid custom-gray-background">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-6 mt-5 mb-5 text-start">
                        <h2 className="display-3 mb-5">Vision that evolved: Our <span className="text-uppercase text-secondary">History</span>,
                            Your <span className="text-uppercase text-primary">Future</span>.</h2>
                        <span className="fs-4">
                            <p>
                                Welcome to OptiPC, where innovation and passion drive our journey since 2005. We began with a vision to simplify technology and empower users.
                            </p>
                            <p>
                                Our humble beginnings in a small office fueled our commitment to exceed expectations. From basic repairs to comprehensive IT solutions, we evolved to meet changing demands.
                            </p>
                            <p>
                                In 2010, OptiPC Pro revolutionized computer optimization, solidifying our leadership. Adapting to customer needs, we expanded to network management in 2015.
                            </p>
                            Today, with over 15 years of dedication, we pride ourselves on delivering advanced IT services. Join our evolution and shape your future with OptiPC!

                        </span>
                    </div>
                    <div className="col-lg-6 mt-5 mb-5">
                        <div className="img-fluid rounded ">
                            <img src="./images/about_us/guy.jpg" className="about-info-img rounded"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AboutInfo;