import React from "react";
function HeroImage() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item hero-carousel-item">
                    <img src="./images/gallery/drive.jpg" className="d-block w-100 hero-image" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block top-0 text-start hero-carousel-caption">
                        <h5 className="display-1">Photography</h5>
                        <hr></hr>
                        <p>at it's finest</p>
                    </div>
                </div>
                <div className="carousel-item hero-carousel-item">
                    <img src="./images/gallery/mac.jpg" className="d-block w-100 hero-image" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block top-0 text-start hero-carousel-caption">
                        <h5 className="display-1">Show off your setups</h5>
                        <hr></hr>
                        <p>and let others inspire you !</p>
                    </div>
                </div>
                <div className="carousel-item active hero-carousel-item">
                    <img src="./images/gallery/setup1.jpg" className="d-block w-100 hero-image" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block top-0 text-start hero-carousel-caption">
                        <h5 className="display-1">Embrace Technology</h5>
                        <hr></hr>
                        <p>by fans for fans</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default HeroImage;