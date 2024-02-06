
import { AboutUs, Promo, FindUs, Footer, Gallery, Header, Intro, Maverick, BuggyTours, Combo } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
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
