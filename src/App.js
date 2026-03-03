import React, { useState, useEffect, Suspense } from 'react';
import About from './components/about/About.js';
import Header from './components/header/Header.js';
import 'react-toastify/dist/ReactToastify.css';
import './global.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './smallComponents/footer/Footer.js';
import ServiceListing from './components/serviceListing/ServiceListing.js';
import Projector from './components/projector/Projector.js';
import LED from './components/LED.js';
import Lighting from './components/Lighting.js';
import Graphy from './components/Graphy.js';
import Shamiana from './components/Shamiana.js';
import Baloon from './components/Baloon.js';
import Webcasting from './components/Webcasting.js';
import Contact from './components/contact/Contact.js';
import Speaker from './components/speakers/Speaker';
import Djpackages from './components/Djpackages.js';
import Weddingpackages from './components/Weddingpackages.js';
import Catering from './components/Catering.js';
import Corporate from './components/Corporate.js';
import Loader from './Loader';
import PHnumber from './components/Phnumber/PHnumber.js';
import { ToastContainer } from 'react-toastify';
import ContactIcons from './components/contacticons/ContactIcons.js';
import OtherService from './components/OtherService.js';
import ProjectorBangalore from './components/projector/ProjectorBangalore.js';
import { useLocation } from 'react-router-dom';
import SpecialFooter from './smallComponents/specialfooter/SpecialFooter.js';
import ProjectorWhitefield from './components/projector/ProjectorWhitefield.js';
import ProjectorIndiranagar from './components/projector/ProjectorIndiranagar.js';
import ProjectorBellandur from './components/projector/ProjectorBellandur.js';
import ProjectorMarathahalli from './components/projector/ProjectorMarathahalli.js';
import ProjectorHSR from './components/projector/ProjectorHSR.js';

const Home = React.lazy(() => import("./components/home/Home.js"))

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};


const MainLayout = () => {
  const specialRoutes = [
    '/projectors-on-rent-in-koramangala',
    '/projectors-on-rent-in-whitefield',
    '/projectors-on-rent-in-indiranagar',
    '/projectors-on-rent-in-bellandur',
    '/projectors-on-rent-in-marathahalli',
  ];
  const location = useLocation();

  const isSpecialRoute = specialRoutes.includes(location.pathname);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setIsLoading(true);
    const handleRouteChangeEnd = () => setIsLoading(false);

    window.addEventListener('routeChangeStart', handleRouteChangeStart);
    window.addEventListener('routeChangeEnd', handleRouteChangeEnd);

    return () => {
      window.removeEventListener('routeChangeStart', handleRouteChangeStart);
      window.removeEventListener('routeChangeEnd', handleRouteChangeEnd);
    };
  }, []);

  
  return (
    <>
      <PHnumber />
      <Header />
      <ToastContainer position='top-right' autoClose={2500} theme="dark"></ToastContainer>
      {isLoading ? <Loader /> : (
        <Routes>

          <Route path='/' element={
            <Suspense fallback={<div></div>}>
              <Home />
            </Suspense>
          } />
          <Route path='about-us' element={<About />} />

          <Route path='/service-listing' element={<ServiceListing />} />
          <Route path='/best-projector-screen-rental-in-bangalore' element={<Projector />} />
          <Route path='/premium-speaker-rentals-in-bangalore' element={<Speaker />} />
          <Route path='/led-tv-and-wall-rental-services-bangalore' element={<LED />} />
          <Route path='/decoration-lights-rental-service-in-bangalore' element={<Lighting />} />
          <Route path='/photography-and-videography-rental-services-in-bangalore' element={<Graphy />} />
          <Route path='/shamiana-rental-services' element={<Shamiana />} />
          <Route path='/dj-packages-for-rent' element={< Djpackages />} />
          <Route path='/wedding-packages' element={<Weddingpackages />} />
          <Route path='/live-streaming-webcasting-for-rent-in-bangalore' element={<Webcasting />} />
          <Route path='/professional-catering-services-in-bangalore' element={<Catering />} />
          {/*  <Route path='/emcee' element={<Emcee />} /> */}
          <Route path='/custom-t-shirts-and-corporate-gifts-providers-bangalore' element={<Corporate />} />
          <Route path='/services/emcee-services-corporate-events-bangalore' element={<OtherService />} />

          <Route path='/flower-and-balloon-decorations-for-rent-in-bangalore' element={<Baloon />} />

          <Route path='/contact-us' element={<Contact />} />
          <Route path='/projectors-on-rent-in-koramangala' element={<ProjectorBangalore />} />
          <Route path='/projectors-on-rent-in-whitefield' element={<ProjectorWhitefield />} />
          <Route path='/projectors-on-rent-in-indiranagar' element={<ProjectorIndiranagar />} />
          <Route path='/projectors-on-rent-in-bellandur' element={<ProjectorBellandur />} />
          <Route path='/projectors-on-rent-in-marathahalli' element={<ProjectorMarathahalli />} />
          <Route path='/projectors-on-rent-in-hsr-layout' element={<ProjectorHSR />} />
        </Routes>
      )}
      <ContactIcons />
      {isSpecialRoute ? <SpecialFooter /> : <Footer />}
      </>
  );
}
export default App;