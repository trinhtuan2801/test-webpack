import React from 'react';
import ReactDOM from 'react-dom/client';
import RedText from './components/RedText';
import Logo from './components/Logo';
import Duck from './components/Duck';

function App() {
  return (
    <div>
      <h1>App</h1>
      <RedText />
      <Logo />
      <Duck />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
