import React from "react";
import Card from "./Card.tsx";
import ServiceCards from "./ServiceCards.tsx";
import { FaLaptop, FaWindows,FaDatabase } from "react-icons/fa";
import { MdScreenshotMonitor } from "react-icons/md";
import { FaDroplet } from "react-icons/fa6";
import { LuServerCog } from "react-icons/lu";
import { BsKeyboardFill,BsFillMotherboardFill } from "react-icons/bs";
import { PiComputerTowerLight } from "react-icons/pi";
import { IoIosNavigate } from "react-icons/io";
function ServicesPanels() {
    return (<div>
        <div className="container-fluid custom-gray-background">
            <div className="row">
                <h1 className="text-center display-1">Our services:</h1>
                
            </div>
            <div className="container ">
                <div className="row mb-3 mt-2">
                <hr></hr>
                    <div className="col-md-3">
                        <p>
                        <h1 className="mt-3 display-5">Maintenance services</h1>
                        </p>
                        <p>What are we doing ?</p>
                    </div>
                    <div className="col-md-3">
                        <ServiceCards
                            serviceCardDescription="We service assemblies on major PC devices, laptops, monitors and other devices."
                            serviceCardTitle="Mainboard repairment">
                            <FaLaptop size={100} />
                        </ServiceCards>
                    </div>
                    <div className="col-md-3">
                        <ServiceCards
                            serviceCardDescription="We install new versions of Windows 10, 11 and MAC OS operating systems."
                            serviceCardTitle="System installation">
                            <FaWindows size={100} />
                        </ServiceCards>
                    </div>
                    <div className="col-md-3">
                        <ServiceCards
                            serviceCardDescription="We replace broken/damaged LCD/LED/IPS matrices with new or used ones."
                            serviceCardTitle="Screen replacement">
                            <MdScreenshotMonitor size={100}/>
                        </ServiceCards>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <ServiceCards
                            serviceCardDescription="We perform comprehensive cleaning of motherboards after filling them with liquid."
                            serviceCardTitle="Service after flooding">
                            <FaDroplet size={100}/>
                        </ServiceCards>
                    </div>
                    <div className="col-md-3">
                        <ServiceCards
                            serviceCardDescription="We help in recovering data from drives and memory cards."
                            serviceCardTitle="Data recovery">
                            <FaDatabase size={100}/>
                        </ServiceCards>
                    </div>
                    <div className="col-md-3">
                        <ServiceCards
                            serviceCardDescription="You can purchase all the necessary accessories from us and benefit from our advice"
                            serviceCardTitle="Accesories for Devices">
                            <BsKeyboardFill size={100}/>
                        </ServiceCards>
                    </div>
                    <div className="col-md-3">
                        <ServiceCards
                            serviceCardDescription="We can help you manage your digital infrastructure, and provide our supremacy"
                            serviceCardTitle="Outsourcing IT">
                            <LuServerCog size={100}/>
                        </ServiceCards>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <ServiceCards
                            serviceCardDescription="We can help you build your desired PC! Just give us the price"
                            serviceCardTitle="Building your dream PC">
                            <PiComputerTowerLight size={100}/>
                        </ServiceCards>
                    </div>
                    <div className="col-md-3 ">
                        <ServiceCards
                            serviceCardDescription="We replace BGA chips with new ones and offer a graphics chip replacement service."
                            serviceCardTitle="BGA systems repairment">
                            <BsFillMotherboardFill size={100}/>
                        </ServiceCards>
                    </div>
                    <div className="col-md-3">
                        <ServiceCards
                            serviceCardDescription="We repair tablets, replace displays, power sockets, and remove all types of faults."
                            serviceCardTitle="Nav / tablets repairment">
                            <IoIosNavigate size={100}/>
                        </ServiceCards>
                    </div>
                    <div className="col-md-3">
                        <ServiceCards
                            serviceCardDescription="We can help you manage your digital infrastructure, and provide our supremacy"
                            serviceCardTitle="Outsourcing IT">
                            <LuServerCog size={100}/>
                        </ServiceCards>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default ServicesPanels;