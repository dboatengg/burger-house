import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";

import logo from "../assets/logo.png";
import express from "../assets/express.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    menuActive &&
      document.addEventListener("mousedown", handleClickOutsideNavMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNavMenu);
    };
  }, [menuActive]);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  const handleClickOutsideNavMenu = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };
  const navMenuClassName = `navbar__menu ${
    menuActive ? "show__nav" : "hide__nav"
  }`;

  return (
    //prettier-ignore
    <div className="navbar">
        <div className="navbar__content container">
          <div className="navbar__mobile">
            <a href="#" className="logo"><img src={logo} alt="" /></a>
          <button className="navbar__toggle" onClick={handleClick}>{menuActive ? <GrFormClose/> :<RxHamburgerMenu />}</button>
          </div>
          <div className={navMenuClassName} ref={navRef}>
            <div className="top">
                <img src={express} alt="" />
                <p>Express Delivery +1 234 567 890</p>
            </div>
            <ul className="menu">
                <li><Link onClick={()=>{setMenuActive(false)}} spy={true} smooth={true} offset={-50} duration={500} to="home">HOME</Link></li>
                <li><Link onClick={()=>{setMenuActive(false)}} spy={true} smooth={true} offset={-50} duration={500} to="menu">MENU</Link></li>
                <li><Link onClick={()=>{setMenuActive(false)}} spy={true} smooth={true} offset={-50} duration={500} to="story">OUR STORY</Link></li>
                <li><Link onClick={()=>{setMenuActive(false)}} spy={true} smooth={true} offset={-50} duration={500} to="contact">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
    </div>
    //prettier-ignore
  );
};

export default Navbar;
