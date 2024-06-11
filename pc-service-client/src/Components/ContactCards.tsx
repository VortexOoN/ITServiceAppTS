import React from "react";
import { IoMdPin } from "react-icons/io";
import { FaEnvelope } from 'react-icons/fa';
import { FiPhoneCall } from "react-icons/fi";
function ContactCards() {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-sm-4 gy-5 fs-4">
                    <IoMdPin size={50}/>
                    <h2 className="mt-2">Adress</h2>
                    <p>33-300 Nowy Sącz</p>
                    <p>28 Listopada, Nowy Sącz, Poland</p>  
                </div>
                <div className="col-sm-4 gy-5 fs-4">
                    <FaEnvelope size={50} />
                    <h2 className="mt-2">Email</h2>
                    <a>optiPC@gmail.com</a>
                </div>
                <div className="col-sm-4 gy-5 fs-4">
                    <FiPhoneCall size={50}/>
                    <h2 className="mt-2">Phone</h2>
                    <a>+ 48 694 202 137</a>
                </div>
            </div>
        </div>
    )
}
export default ContactCards;