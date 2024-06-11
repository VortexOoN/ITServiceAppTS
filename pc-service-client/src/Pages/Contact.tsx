import React from "react";
import GoogleMap from "../Components/GoogleMap.tsx";
import Form from "../Components/Form.tsx";
import Card from "../Components/Card.tsx";
import CenteredCards from "../Components/CenteredCards.tsx";
import ContactCards from "../Components/ContactCards.tsx";
import CallUs from "../Components/CallUs.tsx"
import OnlineMeeting from "../Components/OnlineMeeting.tsx";


function Contact() {
    return (
        <>
        <ContactCards />
        <div className="container-fluid custom-gray-background">
        <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mb-5">
                        <GoogleMap />
                    </div>
                    <div className="col-md-6 mt-5 mb-5">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
            <OnlineMeeting/>
        </>
    )
}
export default Contact;