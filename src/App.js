import React from 'react';
import Perfil from './components/perfil/perfil';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Perfil
          biografia='trabajador'
          email='adrianhh1426@gmail.com'
        />
      </div>
    );
  }
};


export default App;
