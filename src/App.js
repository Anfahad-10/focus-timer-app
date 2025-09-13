import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import './App.css';

function App() {

  const [duration, setDuration] = useState(1500);
  const [balance, setBalance] = useState(0);

  const [seconds, setSeconds] = useState(duration);
  const [isActive, setIsActive] = useState(false);

  const [balanceAtStart, setBalanceAtStart] = useState(balance);


  function toggle() {
    if (!isActive) {
      // When we start the timer, we record the current balance.
      setBalanceAtStart(balance);
    }
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(duration);
    setIsActive(false);
  }
  
  // 4. MOVE THE USEEFFECT LOGIC FROM TIMER.JS
  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0 && isActive) {
      // Timer finished successfully!
      const newBalance = balanceAtStart + duration;
      setBalance(newBalance); // Commit the new balance
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, duration, balanceAtStart]);

  // 5. EFFECT TO SYNC TIMER WHEN DURATION CHANGES
  useEffect(() => {
    setSeconds(duration);
    setIsActive(false); // Also stop the timer
  }, [duration]);


    const displayBalance = isActive 
    ? balanceAtStart + (duration - seconds) 
    : balance;


  return (
    <div className="App">
      <header className="App-header">
        <div className="wallet">
          {/* Use the derived displayBalance here */}
          <h2>Virtual Balance: ${displayBalance}</h2>
        </div>
        <h1>My Focus Timer App</h1>
        {/* The rest of the component... */}
        <div className="preset-buttons">
          <button onClick={() => setDuration(300)}>5 Minutes</button>
          <button onClick={() => setDuration(900)}>15 Minutes</button>
          <button onClick={() => setDuration(1500)}>25 Minutes</button>
          <button onClick={() => setDuration(2700)}>45 Minutes</button>
        </div>

        {/* Pass all the state and functions down as props */}
        <Timer 
        seconds={seconds}
        isActive={isActive}
        onToggle={toggle}
        onReset={reset}
        />
      </header>
    </div>
  );
}

export default App;