
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Promo.css';

const Promo = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.CBuggy} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Dune Buggy Rides" />
      <h1 style={{ fontSize: '60px' }} className="headtext__cormorant">Discover the Magic of the Desert with Our Unforgettable Desert Tours</h1>


      <div className="app__chef-sign">
        <p>Muhammad Asif</p>
        <p className="p__opensans">Founder</p>
      </div>
    </div>
  </div>
);

export default Promo;
