
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.jeepabout} alt="about_knife" style={{ height: '100vh', width: '500px', borderRadius: '20px' }} />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">The company is recognized for professionalism, inspiring operational communications, personalized service and imaginative itineraries that facilitate us to provide clients with the most unforgettable experience. Having made the habit of keeping customers happy with outstanding service, we are fully equipped to assist you in planning organizing and satisfying your needs for group, inducement and individual tours and excursions. The company has set supreme standards of performance; you can depend on us to organize it greatest for you.</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={images.world} alt="" width="60px" />
            <p>Worldwide Customers</p>
          </div>
          <div>
            <img src={images.quality} alt="" width="60px" />
            <p>Best Quality</p>
          </div>
          <div>
            <img src={images.bestprice} alt="" width="60px" />
            <p>Best Offer</p>
          </div>
          <div>
            <img src={images.receipt} alt="" width="60px" />
            <p>Secure Payments</p>
          </div>
        </div>
        {/* <button style={{ marginTop: '20px' }} type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
