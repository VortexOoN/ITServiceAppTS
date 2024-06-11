import React, { useState } from 'react'

export enum LinkColor {
    Light,
    Secondary,
}
type NavbarLinkProps = {
    linkText: string;
    link: string;
    linkColor: LinkColor;
}
function getLinkColor(linkColor: LinkColor) {
    if (linkColor === LinkColor.Light) {
        return "text-light";
    } else {
        return "text-secondary";
    }

}
function NavbarLink(props: NavbarLinkProps) {
    return (
        <li className="nav-item">
            <a
                className={`nav-link ${getLinkColor(props.linkColor)}`}
                aria-current="page"
                href={props.link}
            >
                {props.linkText}</a>
        </li>
    )
}
export default NavbarLink;