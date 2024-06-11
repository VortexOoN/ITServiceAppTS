import React, { ReactNode } from "react";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";
import { Outlet } from "react-router-dom";

type LayoutProps={
    children: ReactNode;
}
function Layout(props: LayoutProps){
    return(
        <>
        <Navbar/>
            <Outlet></Outlet>
        <Footer/>
        </>
    )
}
export default Layout;