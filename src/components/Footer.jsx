import logoWhite from "../assets/logo--white.png";
import { MdLocationPin } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content container">
        <div className="footer__top">
          <div className="text">
            <img className="footer__logo" src={logoWhite} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div className="address">
            <div className="">
              <MdLocationPin />
              <p>Main Road, Building Name, Country</p>
            </div>
            <div className="">
              <MdMail />
              <p>info@companyname.com</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <small className="copyright">
            © Company Name 2020. All rights reserved.
          </small>
          <div className="social">
            <AiFillInstagram />
            <FaFacebookSquare />
            <AiOutlineTwitter />
            <IoLogoWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
