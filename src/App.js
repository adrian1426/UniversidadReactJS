import React from 'react';
import Fruta from './components/ClassFrutas';
import './App.css';


function App() {
  return (
    <div className="App">
      <Fruta
        nombre='Manzana'
        precio={10}
      />
    </div>
  );
}

export default App;
