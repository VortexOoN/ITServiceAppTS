import React, { ReactNode } from "react";
type ServiceCardProps={
    serviceCardTitle: string;
    children: ReactNode;
    serviceCardDescription: string;
}
function ServiceCards(props:ServiceCardProps) {
    return (
        <div className="card border-0">
            <div className="card-body custom-gray-background">
            {props.children}
                <h5 className="card-title display-6 fw-">{props.serviceCardTitle}</h5>
                <p className="card-text">{props.serviceCardDescription}</p>
            </div>
        </div>
    );
}
export default ServiceCards;