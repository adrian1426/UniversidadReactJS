import React from 'react';
import './App.css';

const Gato = props => {
  return (
    <div>
      <h1>Gato</h1>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
  );
};

class App extends React.Component {
  state = {
    vidas: 6,
    hijos: 9,
  };

  render() {
    const otrosDatos = {
      color: 'negro',
      dueño: 'Adrian',
    };

    return (
      <div className="App">
        <Gato
          nombre="Garfiel"
          edad={5}
          {...otrosDatos}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
