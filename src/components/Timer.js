// Timer.js (The new "Dumb" version)

import React from 'react';

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

// Timer now receives everything it needs to display and do as props
function Timer({ seconds, isActive, onToggle, onReset }) {
  return (
    <div className="timer-container">
      <h1 className='timer-text'>
        {formatTime(seconds)}
      </h1>
      <div className='timer-buttons'>
        <button onClick={onToggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;