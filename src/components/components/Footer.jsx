import React from "react";
import "../style/Footer.css";
import Logo from "../../assets/imgs/Logo white.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
    <div className="footer flex-parent">
      <div className="container ">
        <div className="child first flex-container-column">
          <img src={Logo}></img>
          <p className="content">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
          <div className="footer-icons flex-container-row">
            <a href="tel:+201228099652"><WhatsAppIcon/></a>
            <a href="https://www.facebook.com/profile.php?id=100027173224339"><FacebookOutlinedIcon/></a>
            <a href="https://www.instagram.com/ali_mostafa_711/"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/ali-eldin-mostafa-a3a8b628b/"><LinkedInIcon/></a>
          </div>
        </div>
        <div className="child second flex-container-column">
          <p className="element active">Services</p>
          <p className="element">Bonus program</p>
          <p className="element">Gift cards</p>
          <p className="element">Credit and payment</p>
          <p className="element">Services contracts</p>
          <p className="element">Non-cash account</p>
          <p className="element">Payment</p>
        </div>
        <div className="child third flex-container-column">
          <p className="element active">Assistance to the buyer</p>
          <p className="element">Find an order</p>
          <p className="element">Terms of delivery</p>
          <p className="element">Exchange and returns of goods</p>
          <p className="element">Guarantee</p>
          <p className="element">Frequently asked questions</p>
          <p className="element">Terms of use of the site</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
