import React from 'react';
import withCounter from './components/HOC/myHOC';

/*
-Comunicación de componentes - HOC - bidireccional
-transpaso de configuración al HOC.
-hay dos formas de hacerlo, 1.-pasarlo como segundo parámetro, o como ejecución de una función
*/


class App extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px' }}
      >
        <h1>Componente Padre</h1>
        <h2>{this.props.num}</h2>
        <button onClick={this.props.add}>+</button>
      </div>
    );
  }
};


export default withCounter(App, { click: 20 })({ constSuma: 2 });
