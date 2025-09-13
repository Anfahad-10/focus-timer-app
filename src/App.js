import React, { useState } from 'react';
import Timer from './components/Timer';
import './App.css';

function App() {
  // 2. Add a state variable to hold the duration in seconds.
  // Let's make 25 minutes (1500 seconds) the default.
  const [duration, setDuration] = useState(1500);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Focus Timer App</h1>
        {/* The rest of the component... */}
        <div className="preset-buttons">
          <button onClick={() => setDuration(300)}>5 Minutes</button>
          <button onClick={() => setDuration(900)}>15 Minutes</button>
          <button onClick={() => setDuration(1500)}>25 Minutes</button>
          <button onClick={() => setDuration(2700)}>45 Minutes</button>
        </div>

        <Timer initialSeconds={duration} />
      </header>
    </div>
  );
}

export default App;