import logo from "../assets/logo.png";
import express from "../assets/express.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    //prettier-ignore
    <div className="navbar">
        <div className="navbar__content container">
          <div className="navbar__mobile">
            <a href="#" className="logo"><img src={logo} alt="" /></a>
            <button className="navbar__toggle"><RxHamburgerMenu /></button>
          </div>
          <div className="navbar__menu">
            <div className="top">
                <img src={express} alt="" />
                <p>Express Delivery +1 234 567 890</p>
            </div>
            <ul className="menu">
                <li><a href="">HOME</a></li>
                <li><a href="">MENU</a></li>
                <li><a href="">OUR STORY</a></li>
                <li><a href="">CONTACT US</a></li>
            </ul>
          </div>
        </div>
    </div>
    //prettier-ignore
  );
};

export default Navbar;
