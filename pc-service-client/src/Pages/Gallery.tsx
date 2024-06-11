import React from "react";
import Card from "../Components/Card.tsx";
import HeroImage from "../Components/HeroSlider.tsx";
import GalleryPhoto from "../Components/GalleryPhoto.tsx";
import CallUs from "../Components/CallUs.tsx";

function Gallery() {
    return (
        <>
            <HeroImage />
            <h1 className="text-center display-1">Gallery</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/pc.jpg" cardText="@OptiPC #pc_builds"
                            likes="56" shares="10" userName="MIranDes">
                        </GalleryPhoto>
                    </div>
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/mac.jpg" cardText="@OptiPC #setup_with_soul"
                            likes="23" shares="1" userName="Roxanne12#">
                        </GalleryPhoto>
                    </div>
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/setup1.jpg" cardText="@OptiPC #productivity"
                            likes="76" shares="69" userName="Przemysław Czarnek">
                        </GalleryPhoto>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/setup2.jpg" cardText="@OptiPC #simplicity"
                            likes="120" shares="11" userName="SexyPC">
                        </GalleryPhoto>
                    </div>
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/setup3.jpg" cardText="@OptiPC #RGB #LED #Gaming"
                            likes="71" shares="20" userName="Paule21#73">
                        </GalleryPhoto>
                    </div>
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/pc2.jpg" cardText="@OptiPC #photography"
                            likes="90" shares="10" userName="ThatGuy2">
                        </GalleryPhoto>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/components.jpg" cardText="@OptiPC #pure_perfection #symetry"
                            likes="89" shares="11" userName="ITguy">
                        </GalleryPhoto>
                    </div>
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/server.jpg" cardText="@OptiPC #server #symetry"
                            likes="71" shares="15" userName="Johann421">
                        </GalleryPhoto>
                    </div>
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/server2.jpg" cardText="@OptiPC #white_dark #photooftheday"
                            likes="90" shares="10" userName="ThatGuy2">
                        </GalleryPhoto>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/setup5.jpg" cardText="@OptiPC #pure_perfection #symetry"
                            likes="29" shares="11" userName="ITguy">
                        </GalleryPhoto>
                    </div>
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/laptop.jpg" cardText="@OptiPC #server #symetry"
                            likes="74" shares="15" userName="JakisPolakZAparatem">
                        </GalleryPhoto>
                    </div>
                    <div className="col-md-4 gy-4">
                        <GalleryPhoto cardImage="./images/gallery/mac2.jpg" cardText="@OptiPC #white_dark #photooftheday"
                            likes="43" shares="10" userName="VortexOoN">
                        </GalleryPhoto>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery;