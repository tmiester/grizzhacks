import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [randomRow, setRandomRow] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const messages = [
    "Don't give up!",
    "Keep going!",
    "You got this!",
    "Stay strong!",
    "Believe in yourself!",
    "Never stop dreaming!"
  ];

  const sounds = ["/squeak.wav", "/squeak2.wav", "/water.wav", "/paper.wav"];

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load JSON');
        }
        return response.json();
      })
      .then((jsonData) => {
        if (!Array.isArray(jsonData)) {
          throw new Error('JSON is not an array');
        }
        setData(jsonData);
      })
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  const handleClick = () => {
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setRandomRow({ ...data[randomIndex], message: randomMessage });

      if (soundEnabled) {
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
        const sound = new Audio(process.env.PUBLIC_URL + randomSound);
        sound.play().catch((error) => console.error(`Error playing ${randomSound}:`, error));
      }
    }
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Duckbowl of Motivation!</h1>
        <p>A <em>GrizzHackers</em>-powered project for those tough days in the command line or VSC.</p>

        
        <button className="fishbowl-button" onClick={handleClick}>
          <img src="/fishbowl.jpg" alt="Fishbowl" className="fishbowl-image" />
        </button>

        {randomRow && (
          <div className="data-box">
            <p>
              <strong>{randomRow.message}</strong> {randomRow.name} from {randomRow.school} says: "{randomRow.quote}"
            </p>
          </div>
        )}

        <button className="sound-toggle" onClick={toggleSound}>
          {soundEnabled ? "🔊 Sound On" : "🔇 Sound Off"}
        </button>
      </header>
    </div>
  );
}

export default App;


