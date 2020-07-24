import React from 'react';
import Hijo from './components/hijo';

/*
-Comunicación de componentes - patrón variables globales
-transpaso de datos desde el hijo al padre  o del padre al hijo
-utilizando window como variable global
*/
class App extends React.Component {

  componentDidMount() {
    window.title = 'Saludos desde el padre'
  }

  handleClick = () => {
  };

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px' }}
      >
        <h1>Componente Padre</h1>
        <button onClick={this.handleClick}>padre</button>
        <Hijo />
      </div>
    );
  }
};


export default App;
