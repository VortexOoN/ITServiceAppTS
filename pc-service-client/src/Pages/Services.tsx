import React from "react";
import HeroImage from "../Components/HeroImage.tsx";
import ServicesPanels from "../Components/ServicesPanels.tsx";
import OnlineMeeting from "../Components/OnlineMeeting.tsx";
import RepairPrices from "../Components/RepairPrices.tsx";
function Services(){
    return(
        <>
        <HeroImage imageDescription="Connected for providing help." imagePath="./images/gallery/services.jpg" imageTitle="Technically Connected"/>
        <ServicesPanels/>
        <OnlineMeeting/>
        <RepairPrices/>
        </>
        
    )
}
export default Services;