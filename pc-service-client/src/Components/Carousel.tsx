import React from "react";
import Button, { ButtonColor } from "./Button.tsx";

function Carousel() {
    return (

            <div id="mainMenuCarousell" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#mainMenuCarousell" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#mainMenuCarousell" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#mainMenuCarousell" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src="./images/blogthebest.jpg" className="d-block w-100 carousel-image" alt="..."></img>
                        <div className="carousel-caption d-none d-lg-block top-0 text-start hero-carousel-caption">
                            <h5 className="display-1 fw-bolder">Blog functionality</h5>
                            <hr />
                            <p><span className="text-warning">Best solutions</span> for most common problems.</p>
                            <Button buttonLink="/Blog" buttonText="See Blog" buttonColor={ButtonColor.Light} className="px-4 py-2 fs-5 fw-bold"></Button>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="./images/gallery/components.jpg" className="d-block w-100 carousel-image" alt="..."></img>
                        <div className="carousel-caption d-none d-lg-block top-0 text-start hero-carousel-caption">
                            <h5 className="display-1 fw-bolder">IT Multi Service Company</h5>
                            <hr />
                            <p>Information Technology on <span className="text-success">larger scale</span>.</p>
                            <Button buttonLink="/About" buttonText="About Us" className="px-4 py-2 fs-5 fw-bold" buttonColor={ButtonColor.Light}></Button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/laptop3.jpg" className="d-block w-100 carousel-image" alt="..."></img>
                        <div className="carousel-caption d-none d-lg-block top-0 text-start hero-carousel-caption">
                            <h5 className="display-1 fw-bolder">Gallery</h5>
                            <hr />
                            <p>See <span className="text-danger">stunning pictures</span> of our clients's PC builds !</p>
                            <Button buttonLink="/Gallery" buttonText="Gallery" buttonColor={ButtonColor.Light} className="px-4 py-2 fs-5 fw-bold"></Button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mainMenuCarousell" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainMenuCarousell" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

    )
}

export default Carousel;