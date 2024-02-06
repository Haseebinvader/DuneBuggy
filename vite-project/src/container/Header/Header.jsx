import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Welcome to Dune Buddy Ride" />
      <h1 className="app__header-h1">Monster Experience</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Get ready to take the wheek of our powerfull dune buggies</p>
      <button type="button" className="custom__button">Contact Now</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.DuneBanner} alt="header_img" style={{ borderRadius: '20px' }} />
    </div>
  </div>
);

export default Header;
