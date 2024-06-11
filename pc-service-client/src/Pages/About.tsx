import React from "react";
import HeroImage from "../Components/HeroImage.tsx";
import Statistics from "../Components/Statistics.tsx";
import AboutInfo from "../Components/AboutInfo.tsx";
import CallUs from "../Components/CallUs.tsx";

function About() {
    return (
        <>
            <HeroImage imageDescription="Created for tech by tech." imagePath="./images/about_us/pc_in_line.jpg" imageTitle="All hands on tech"/>
            <AboutInfo />
            <Statistics />
            <div className="container-fluid custom-gray-background">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-12 mt-5 mb-5">
                            <h1 className="display-1">
                                Empowering Small Business Leaders for
                                <span className="text-success"> Success</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-start fs-3 mb-5">
                            <p>
                                At OptiPC, we partner with ambitious entrepreneurs and small business leaders who are serious about achieving growth and success in the digital age.
                            </p>
                            <p>
                                Our solutions are tailored for a diverse range of businesses, including consultants, marketing agencies, startups, and many others who are focused on unleashing their potential through cutting-edge IT solutions.
                            </p>
                            <p>
                                Our approach is straightforward. By providing the right technology, guidance, and support, we believe that substantial business growth is within reach.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default About;