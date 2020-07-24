import React from 'react';
import Hijo from './components/hijo';
import PubSub from 'pubsub-js';

/*
-Comunicación de componentes - patrón observable
-transpaso de datos desde el hijo al padre  o del padre al hijo
-utilizando pubsub-js
*/
class App extends React.Component {

  componentDidMount() {
    PubSub.subscribe('saludo', (e, data) => {
      alert(data);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe('saludo');
  }

  handleClick = () => {
    PubSub.publish('saludoPadre', {
      title: 'Saludo desde padre'
    });
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
