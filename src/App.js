import React from 'react';
import Hijo from '../src/components/hijo';
import Hijo2 from './components/hijo2';

/*
-Comunicación de componentes - Hijo a Padre
-transpaso de datos desde el hijo al padre 
-utilizando Propagación de eventos Event Bubbling
*/
class App extends React.Component {

  state = {
    countA: 0,
    countB: 0
  };

  addA = () => {
    this.setState(state => ({
      countA: state.countA + 1
    }));
  };

  addB = () => {
    this.setState(state => ({
      countB: state.countB + 1
    }));
  };

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px' }}
      >
        <h1>Componente Padre</h1>
        <Hijo
          num={this.state.countA}
          addA={this.addB}
        />
        <Hijo2
          num={this.state.countB}
          addB={this.addA}
        />
      </div>
    );
  }
};


export default App;
