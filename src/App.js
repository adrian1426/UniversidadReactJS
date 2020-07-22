import React from 'react';
import Fruta from './components/fruta/TarjetaFruta';
import './App.css';


function App() {
  return (
    <div className="App">
      <Fruta
        nombre='Manzana'
        precio={10}
      />

      <Fruta
        nombre='Mango'
        precio={15}
      />
    </div>
  );
}

export default App;
