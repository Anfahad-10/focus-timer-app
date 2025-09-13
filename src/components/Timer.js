import React, { useState, useEffect } from 'react';

function Timer({ initialSeconds = 60 }) {

  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  // This is the helper function for the Start/Pause button
  function toggle() {
    setIsActive(!isActive);
  }

  // This is the helper function for the Reset button
  function reset() {
    setSeconds(initialSeconds);
    setIsActive(false);
  }

  // This is the effect that runs the countdown
  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false); // Stop the timer when it hits 0
    }
    
    // This is the cleanup function
    return () => clearInterval(interval);
  }, [isActive, seconds]); // Re-run this effect when isActive or seconds changes

  return (
    <div className="timer-container">
      <h2>Timer Component</h2>
      
      {/* We display the state variable 'seconds' here */}
      <h1 className='timer-text'>
        {seconds}s 
      </h1>
      
      <div className='timer-buttons'>
        {/* The first button */}
        <button onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        
        {/* The second button */}
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;