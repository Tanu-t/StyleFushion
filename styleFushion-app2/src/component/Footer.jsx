import { FaTwitter, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
const Footer = () => {
    return (
      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>
  
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>
  
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>
  
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>
  
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>
  
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>
        </div>
        <hr />
  
        <div className="copyright">
           <span><FaTwitter/>  <FaFacebook/> <FaInstagram/> <FaYoutube/></span> 
          <span className="margin-footer">© 2024 www.StyleFushion.com. All rights reserved.</span>
          <img
            className="margin-footer"
            src="images/pay.png"
            alt="Myntra Home"
          />
        </div>
      </footer>
    );
  };
  
  export default Footer;