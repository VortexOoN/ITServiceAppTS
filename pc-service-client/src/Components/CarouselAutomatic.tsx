import React from "react";
function CarouselAutomatic() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel text">
            <div className="carousel-inner">
                <div className="carousel-item carousel-automatic-item active" data-bs-interval="10000">
                    <img src="./images/experience.jpg" className="d-block w-100 carousel-image" alt="..."></img>
                </div>
                <div className="carousel-item carousel-automatic-item">
                    <img src="./images/server.jpg" className="d-block w-100 carousel-image" alt="..."></img>
                </div>
                <div className="carousel-item carousel-automatic-item">
                    <img src="./images/server2.jpg" className="d-block w-100 carousel-image" alt="..."></img>
                </div>
            </div>
        </div>
    )
}
export default CarouselAutomatic;