import facebook from '../assets/facebook_1.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-main">
            
            <p>Code. Create. Repeat.</p>
            <p className="footer-content">Request More Information</p>
            <button className="btn">Contact Me</button>
        </div>
        <div className="footer-cpy">
           <p> Built with ❤️ using React | © {new Date().getFullYear()}</p>
        </div>
        <div className="footer-spanel">
            <ul>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
            </ul>
            <div className='footer-logo'>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
            </div>
            
        </div>
        

      </footer>
    </>
  );
};

export default Footer;
