import logo from './logo.svg';

import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Focus Timer App</h1>
        {/* 2. Use the component like an HTML tag */}
        <Timer />
      </header>
    </div>
  );
}

export default App;
