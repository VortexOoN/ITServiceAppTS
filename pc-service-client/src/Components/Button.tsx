import React, { useState } from "react";

export enum ButtonColor {
    Dark,
    Light,
}
//setting button color by enum
function getButtonColor(buttonColor: ButtonColor) {
    switch (buttonColor) {
        case ButtonColor.Dark:
            return "btn-dark";
        case ButtonColor.Light:
            return "btn-light";
        default:
            return "btn-primary";
    }
}
type ButtonProps = {
    buttonText: string;
    buttonColor: ButtonColor;
    className: string;
    buttonLink: string;
}

function Button(props: ButtonProps) {
    return (
        <a href={props.buttonLink}>
            <button
                className={`btn ${props.className} ${getButtonColor(props.buttonColor)}`}>{props.buttonText}
            </button>
        </a>

    )
}
export default Button;