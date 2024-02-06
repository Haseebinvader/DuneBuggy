import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Dubai</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <h1 style={{ color: '#fff' }}> RED DUNE BUGGY</h1>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2024 <span style={{ color: 'red' }}>RED DUNE BUGGY RIDES.</span>  All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
