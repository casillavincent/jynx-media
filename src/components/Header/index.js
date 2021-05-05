import React from "react";
import { useState, useEffect } from "react";

// Hamburger Button
import { Cross as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const Header = () => {
   // Toggle Navigation
   const [isOpen, setOpen] = useState(false);
   const [isDesktop, setIsDesktop] = useState(null);

   const sidebarToggler = () => {
      const sidebar = document.querySelector("nav.site-nav");
      const body = document.querySelector("body");

      if (isOpen) {
         body.setAttribute("style", "overflow: hidden");
         sidebar.classList.add("sidebar-on");
         if (sidebar.classList.contains("sidebar-off")) {
            sidebar.classList.remove("sidebar-off");
         }
      } else {
         if (sidebar.classList.contains("sidebar-on") === true) {
            sidebar.classList.add("sidebar-off");
         }
         body.removeAttribute("style");
      }
   };

   const checkIsDesktop = () => {
      const mql = window.matchMedia("(min-width: 50em)");
      if (mql.matches === true) {
         setIsDesktop(true);
      } else {
         setIsDesktop(false);
      }
   };

   const disableOnClick = () => {
      if (!isDesktop && isOpen) {
         setOpen(false);
         sidebarToggler();
      }
   };
   window.addEventListener("resize", checkIsDesktop);

   useEffect(() => {
      sidebarToggler();
      checkIsDesktop();

      const toggleDarkHeader = () => {
         const header = document.querySelector("header");
         if (window.scrollY >= 350) {
            header.classList.add("dark-header-state");
            header.setAttribute("style", "transition: all 0.25s ease-out");
         } else {
            header.classList.remove("dark-header-state");
         }
      };

      window.addEventListener("scroll", toggleDarkHeader);
      // Clean up function
      return () => {
         window.removeEventListener("scroll", toggleDarkHeader);
         window.removeEventListener("scroll", checkIsDesktop);
      };
   });

   return (
      <header
         className="site-header"
         data-aos="fade-down"
         data-aos-duration="800"
         data-aos-delay="300"
      >
         {/* Site Logo */}
         <div className="site-header__logo">
            <Link to={"/"}>Jynx Media</Link>
         </div>

         {/* Site Navbar */}
         <nav className="site-nav site-header__navigation">
            <ul
               className="nav-ul"
               onClick={() => {
                  disableOnClick();
               }}
            >
               {/* List Item 001 */}
               <li className="li-item">
                  <Link to={"/"} className="nav-anchor">
                     Home
                  </Link>
               </li>

               {/* List Item 001 */}
               <li className="li-item">
                  <Link to={"/agency"} className="nav-anchor">
                     Agency
                  </Link>
               </li>

               {/* List Item 002 */}
               <li className="li-item">
                  <Link to={"/services"} className="nav-anchor">
                     Services
                  </Link>
               </li>

               {/* List Item 003 */}
               <li className="li-item">
                  <Link to={"/work"} className="nav-anchor">
                     Our Work
                  </Link>
               </li>

               {/* List Item 004 */}
               <li className="li-item li-item--sign-in">
                  <Link to={"/contact"}>Contact Us</Link>
               </li>
            </ul>
         </nav>

         {/* Menu Toggler */}
         <button
            className="site-header__toggler toggler"
            onClick={() => {
               sidebarToggler();
            }}
         >
            <Hamburger size="25" toggled={isOpen} toggle={setOpen} />
         </button>
      </header>
   );
};

export default Header;
