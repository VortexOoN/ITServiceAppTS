import React, { ReactNode } from "react";
type CardProps = {
    cardTitle: string;
    cardText: string;
    cardImage: string;
}
function Card(props: CardProps) {
    return (
        <div className="card border border-0 p-4">
            <img src={props.cardImage} className="card-img-top" alt="..."></img>
            <div className="card-body fs-5">
                <h2 className="fw-bold">{props.cardTitle}</h2>
                <p className="card-text">{props.cardText}</p>
            </div>
        </div>
    )
}
export default Card;