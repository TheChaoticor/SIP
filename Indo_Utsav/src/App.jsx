import { useEffect } from 'react';
import { useState } from 'react';
import viteLogo from '/vite.svg';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'messenger-widget-b';
    script.src = 'https://cdn.botpenguin.com/website-bot.js';
    script.defer = true;
    script.text = '66cd8b596f3d13030b924fe2,6610ae11eef8b629a228ae36';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
}

export default App;
