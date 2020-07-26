import React from 'react';
import withResize from './components/HOC/withResize';

/*
-Comunicación de componentes - HOC - bidireccional
-transpaso de configuración al HOC.
-hay dos formas de hacerlo, 1.-pasarlo como segundo parámetro, o como ejecución de una función
*/


class App extends React.Component {

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px' }}
      >
        <h1>Componente Padre</h1>
        <h2>Width: {this.props.width}</h2>
        <h2>Height: {this.props.height}</h2>
      </div>
    );
  }
};


export default withResize(App,
  {
    width: window.innerWidth,
    height: window.innerHeight
  }
);
