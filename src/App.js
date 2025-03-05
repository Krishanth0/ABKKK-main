import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import Anneback from './components/Anneback';
import Histoires from './components/Histoires';
import Vr from './components/Vr';
import Footer from './components/footer';
import Doc from './components/doc';
import Carte from './components/carte';
import Livre from './components/Livre';

function App() {
  return (
    <BrowserRouter>
      <>
        <Welcome />
        <Anneback />
        <Livre />
        <Histoires />
        <Doc />
        <Carte />
        <Vr />
        <Footer/>

      </>
    </BrowserRouter>
  );
}

export default App;
