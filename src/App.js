import React from 'react';
import './styled/null.css'
import Header from './blocks/header/Header'
import OurStory from './blocks/ourStory/OurStory';
import Collectibles from './blocks/collectibles/Collectibles';
import LearnMore from './blocks/learnMore/LearnMore';
import Footer from './blocks/footer/Footer';
import Roadmap from './blocks/roadmap/Roadmap';
import styled from 'styled-components';
import Fighters from './blocks/fighters/Fighters';
import backgroundOut from './blocks/fighters/backgroundOut.png'
import Works from './blocks/works/Works'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './pages/main/main'
import Mint from './pages/mint/Mint'

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route exact path='/mint' element={<Mint/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;