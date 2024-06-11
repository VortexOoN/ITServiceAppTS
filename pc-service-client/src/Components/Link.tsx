import React from "react";
type LinkProps={
    linkText: string;
    link: string;
}
function getLinkColor(){

}
function Link(props: LinkProps){
    return(
        <a className={`text-decoration-none text-light`} href={props.link}>{props.linkText}</a>
    )
}
export default Link;