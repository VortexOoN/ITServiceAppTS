import React from 'react'
import NavbarLink, { LinkColor } from './NavbarLink.tsx';
import { FaComputer } from "react-icons/fa6";
function Navbar() {

   return (
      <nav className="navbar navbar-expand-lg sticky-top bg-dark navbar-dark p-1 fs-4">
         <div className="container">
            <a className="navbar-brand fs-4" href="/">
               <FaComputer size={40} /><span className='ms-2'>OptiPC</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
               <ul className="navbar-nav ms-auto">
                  <NavbarLink link='/' linkText='Home' linkColor={LinkColor.Light} />
                  <NavbarLink link='/Services' linkText='Services' linkColor={LinkColor.Light} />
                  <NavbarLink link='/Gallery' linkText='Gallery' linkColor={LinkColor.Light} />
                  <NavbarLink link='/About' linkText='About Us' linkColor={LinkColor.Light} />
                  <NavbarLink link='/Contact' linkText='Contact' linkColor={LinkColor.Light} />
               </ul>
            </div>
         </div>
      </nav>

   )
}
export default Navbar;