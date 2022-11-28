import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';

const types = [
  'thai', 'japanese', 'chinese'
];
const basedOn = [
  'stars', 'distance'
];

function App() {
  const [type, setType] = useState('');
  const [based, setBased] = useState('');

  return (
    <div>
      <SearchBar types={types} basedOn={basedOn} setType={setType} type={type} setBased={setBased} based={based} />
    </div>
  );
}

export default App;
