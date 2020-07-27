import React from 'react';
import ErrorComponent from './components/error-component/errorComponent';
import MensajeError from './components/error-component/mensajeErrores';
class App extends React.Component {
  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px' }}
      >
        <h1>Componente Padre</h1>
        <MensajeError>
          <ErrorComponent />
        </MensajeError>

        <MensajeError>
          <ErrorComponent />
        </MensajeError>

        <MensajeError>
          <ErrorComponent />
        </MensajeError>
      </div>
    );
  }
};


export default App;
