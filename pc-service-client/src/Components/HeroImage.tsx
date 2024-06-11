import React from "react";
type HeroImageProps={
    imagePath: string;
    imageDescription: string;
    imageTitle: string;
}
function HeroImage(props:HeroImageProps) {
    return (
        <div>
            <div className="img-fluid">
                <img src={props.imagePath} className="d-block w-100 hero"></img>
                <div className="carousel-caption d-none d-lg-block top-0 text-start hero-carousel-caption">
                    <h5 className="display-1 fw-bolder">{props.imageTitle}</h5>
                    <hr></hr>
                    <p>{props.imageDescription}</p>
                </div>
            </div>
        </div>
    )
}
export default HeroImage;