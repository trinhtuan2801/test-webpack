import ReactDOM from 'react-dom/client';
import RedText from './components/RedText';
import Duck from './components/Duck';
import Logo from '@/components/Logo';
import './index.css';

function App() {
  return (
    <div className='app'>
      <h1>App</h1>
      <RedText />
      <Logo />
      <Duck />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
