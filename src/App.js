import React from 'react';
import Hijo from '../src/components/hijo';

/*
-Comunicación de componentes - Hijo a Padre
-transpaso de datos desde el hijo al padre 
-utilizando Propagación de eventos Event Bubbling
*/
class App extends React.Component {

  handleClickPadre = (e) => {
    console.log('Click en padre: ', e.miSaludo);
  };

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px' }}
        onClick={this.handleClickPadre}
      >
        <h1>Componente Padre</h1>
        <Hijo />
      </div>
    );
  }
};


export default App;
