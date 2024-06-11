import React from "react";
import Carousel from "../Components/Carousel.tsx";
import SlideShow from "../Components/SlideShow.tsx";
import CallUs from "../Components/CallUs.tsx";
import CenteredCards from "../Components/CenteredCards.tsx";
import Partnership from "../Components/Partnership.tsx";
function Home() {
    return (
        <>
            <Carousel />
            <CenteredCards />
            <SlideShow />
            <CallUs />
            <Partnership/>
        </>
    )
}
export default Home;