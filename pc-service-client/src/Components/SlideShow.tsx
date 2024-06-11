import React from "react";

function SlideShow() {
    return (
        <div className='container-fluid mt-2 mb-2 custom-gray-background'>
            <div className="container">
                <div className='row'>
                    <div className='col-xl-12 mb-5 mt-5'>
                        <h1 className='display-1 text-center'>Why is it worth trusting us?</h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-6 g-0'>
                    <div className="img-fluid">
                            <img src="./images/about_us/skills.jpg" className="trust-section-img rounded"></img>
                        </div>
                    </div>
                    <div className='col-xl-6 mt-5 text-start'>
                        <h3 className='fw-bold display-2'>Experience</h3>
                        <p className="fs-5">
                            We have been repairing computer equipment for almost 15 years.
                            Thanks to this, we have extensive experience in this field and can solve the most complex technical problems.
                            We guarantee legal liability for services. We are flexible and can adapt to the individual needs of each client.
                            We always try to remove them as leftovers, without unnecessary delays.
                            The trust our clients have in us is crucial to us!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className='col-xl-6 text-start'>
                        <h3 className='fw-bold mt-5  display-2 '>Skills</h3>
                        <p className="fs-5">
                            Our company has many employees with various qualifications.
                            We specialize in repairing computers, laptops, data recovery, we can also help in managing network infrastructure and IT outsourcing.
                            In addition, we create computer networks at the client's request.
                            We also provide mobile equipment repair services at your home. However, if this is not possible, we can try to perform a remote repair using a remote desktop.
                        </p>
                    </div>
                    <div className="col-xl-6 mb-5 g-0">
                        <div className="img-fluid">
                            <img src="./images/gallery/server.jpg" className="trust-section-img rounded"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SlideShow;