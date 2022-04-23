import React from 'react';
import Header from '../../blocks/header/Header'
import OurStory from '../../blocks/ourStory/OurStory';
import Collectibles from '../../blocks/collectibles/Collectibles';
import LearnMore from '../../blocks/learnMore/LearnMore';
import Footer from '../../blocks/footer/Footer';
import Roadmap from '../../blocks/roadmap/Roadmap';
import styled from 'styled-components';
import Fighters from '../../blocks/fighters/Fighters';
import Works from '../../blocks/works/Works'

function Main() {
  return (
    <div className="Main">
      <Header/>
      <OurStory/>
      <Fighters/>
      <Collectibles/>
      <Works/>
      <Roadmap/>
      <LearnMore/>
      <Footer/>
    </div>
  );
}

export default Main;