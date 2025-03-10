import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import Histoires from './components/Histoires';
import Vr from './components/Vr';
import Footer from './components/footer';
import Doc from './components/doc';
import Carte from './components/carte';
import Livre from './components/Livre';
import Mentions from './components/mentions';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleStart = () => {
    setShowWelcome(false); // Hide the Welcome component
  };

  return (
    <BrowserRouter>
      <>
        {showWelcome && <Welcome onStart={handleStart} />}
        {!showWelcome && (
          <>
            <Doc />
            <Livre />
            <Histoires />
            <Carte />
            <Vr />
            <Footer />
            <Mentions />
          </>
        )}
      </>
    </BrowserRouter>
  );
}

export default App;