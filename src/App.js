import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/navbar/Navbar';
import Hero from './components/herosection/Hero';
import Service from './components/service/Service';
import AreaOfPractice from './components/practices/AreaOfPractice';
import Testimonials from './components/testimonials/Testimonials';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="container">
    <Navbar type='header'/>
    <Hero/>
    <Service/>
    <AreaOfPractice />
    <Testimonials />
    <Faq />
    <Footer />
    </div>
  );
}

export default App;
