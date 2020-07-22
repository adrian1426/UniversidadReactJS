import React from 'react';
import Fruta from './components/ClassFrutas';
import Message from './components/Messages';
import './App.css';


function App() {
  return (
    <div className="App">
      <Fruta
        nombre='Manzana'
        precio={10}
      />
      <Message.Success />
    </div>
  );
}

export default App;
