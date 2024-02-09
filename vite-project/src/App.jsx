
import { AboutUs, Promo, FindUs, Footer, Gallery, Header, Intro, Maverick, BuggyTours, Combo } from './container';
import { Navbar } from './components';
import './App.css';
import { ToastContainer } from 'react-toastify';

const App = () => (
  <div>
    <ToastContainer />
    <Navbar />
    <Header />
    <AboutUs />
    <BuggyTours />
    <Maverick />
    <Combo />
    <Promo />
    <Gallery />
    <Intro />
    <FindUs />
    <Footer />
  </div>
);

export default App;
