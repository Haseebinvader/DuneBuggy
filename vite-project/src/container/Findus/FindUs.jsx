import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css'; // Import CSS file for styling

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Email</p>
        <p className="p__opensans">reddunebuggy145@gmail.com</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Contact</p>
        <p className="p__opensans">+971 58 287 8842</p>
      </div>
      {/* <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button> */}
    </div>

    <div className="image-grid">
      <img className="image-grid__item" src={images.Dune4} alt="finus_img" />
      <img className="image-grid__item" src={images.Dune1} alt="finus_img" />
      <img className="image-grid__item" src={images.Dune2} alt="finus_img" />
      <img className="image-grid__item" src={images.Dune3} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
