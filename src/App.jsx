import { useState, useEffect } from 'react';
import './App.css';
import Intro from './Intro.jsx';
import Invit from './Invit.jsx';

function App() {
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    // Allow the user to scroll normally once the intro is gone
    if (isEntered) {
      const timer = setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 1500);
      
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isEntered]);

  return (
    <div className="app">
      <Intro isEntered={isEntered} onEnter={() => setIsEntered(true)} />
      <Invit isEntered={isEntered} />
    </div>
  )
}

export default App;