import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import Anneback from './components/Anneback';
import Histoires from './components/Histoires';
import Vr from './components/Vr';
import Footer from './components/footer';
import Michel from './components/michelodile';
function App() {
  return (
    <BrowserRouter>
      <>
        <Welcome />
        <Anneback />
        <Histoires />
        <Vr />
        <Footer/>
        <Michel />

      </>
    </BrowserRouter>
  );
}

export default App;
