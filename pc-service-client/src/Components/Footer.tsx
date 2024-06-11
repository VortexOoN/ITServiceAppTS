import React from "react";
import Link from "./Link.tsx";
import { FaYoutube, FaEnvelope, FaHome, FaTiktok, FaInstagram, FaFax } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { LuClock5 } from "react-icons/lu";
function Footer() {
    return (
        <div className="footer bg-dark text-light p-3 text-start">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h2 className="fw-bold">Working hours</h2>
                        <ul className="list-unstyled">
                            <li>
                                <p><LuClock5 size={30} /><span className="ms-2">Monday to Friday 8:00 - 20:00 CEST</span></p>
                            </li>
                            <li>
                                <p><LuClock5 size={30} /><span className="ms-2">Saturday 10:00 - 15:00 CEST</span></p>
                            </li>
                            <li>
                                <p className="text-secondary"><LuClock5 size={30} /><span className="ms-2">Saturday - Closed</span></p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-3">
                        <h2 className="fw-bold">Contact & Adress</h2>
                        <ul className="list-unstyled">
                            <li className="mb-2"><FaHome size={30} /><span className="ms-2">28 Listopada, Nowy Sącz, Poland</span></li>
                            <li className="mb-2"><FiPhoneCall size={30} /><span className="ms-2">694-202-137</span></li>
                            <li className="mb-2"><FaEnvelope size={30} /><span className="ms-2">optiPC@gmail.com</span></li>
                            <li className="mb-2"><FaFax size={30} /><span className="ms-2">212-312-321</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h2 className="fw-bold">Useful links</h2>
                        <ul className="list-unstyled">
                            <li className="mb-2 item_hover">
                                <p><Link linkText="About Us" link="/About"></Link></p>
                            </li>
                            <li className="item_hover">
                                <p><Link linkText="Services" link="/Services"></Link></p>
                            </li>
                            <li className="mb-2 item_hover">
                                <p><Link linkText="Gallery" link="/Gallery"></Link></p>
                            </li>
                            <li className="mb-2 item_hover">
                                <p><Link linkText="Contact" link="/Contact"></Link></p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h2 className="fw-bold">Our socials</h2>
                        <ul className="list-unstyled">
                            <li className="mb-2 item_hover"><FaYoutube size={30} /><span className="ms-2"><Link linkText="YouTube" link="https://www.youtube.com/" /></span></li>
                            <li className="mb-2 item_hover"><FaTiktok size={30} /><span className="ms-2"><Link linkText="TikTok" link="https://www.tiktok.com/pl-PL/" /></span></li>
                            <li className="mb-2 item_hover"><FaInstagram size={30} /><span className="ms-2"><Link linkText="Instagram" link="https://www.instagram.com/" /></span></li>
                            <li className="mb-2 item_hover"><RiTwitterXFill size={30} /><span className="ms-2"><Link linkText="Twitter/X" link="https://twitter.com/?lang=pl" /></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row mt-3 text-center">
                <div className="col-lg-12 fst-italic">
                    ©2024 OptiPC Poland - All Rights Reserved
                </div>
            </div>
        </div>
    )
}
export default Footer;