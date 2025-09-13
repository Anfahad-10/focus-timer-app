import React, { useState } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(60);
  return (
    <div className="timer-container">
      <h2>Timer Component</h2>
      <h1>{seconds}</h1>
      <button>Start</button>
      <button>Stop</button>
    </div>
  );
}

export default Timer;