import React from 'react';
import NavBar from '../NavBar/NavBar';
import './LandingPage.css'
import HeroContent from '../HeroContent/HeroContent';
import Introduction from '../Introduction/Introduction';
import ChooseUs from '../ChooseUS/ChooseUs';
import AreaOfPractices from '../AreaOfPractices/AreaOfPractices';
import Clients from '../Clients/Clients';
import Team from '../Team/Team';
import Faq from '../Faq/Faq';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const LandingPage = () => {
  return (
    <div className='main'>
        <div className='hero-header'> 
        <NavBar />
        <HeroContent />
        </div>
        <div className='background-content'>
          <div className='body-wrapper'>
           <Introduction />
           <ChooseUs />
           <AreaOfPractices />
           <Clients />
           <Team />
           <Faq />
           <NewsLetter />
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default LandingPage