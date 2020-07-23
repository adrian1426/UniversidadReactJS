import React from 'react';
import Hijo from '../src/components/hijo';

/*
-Comunicación de componentes - Padre a Hijo
-ejecución de una función del componente hijo, desde el componente padre
-utilizando React.createRef
- para este caso particular con createRef ,el componente hijo debe ser de tipo clase
*/
class App extends React.Component {

  hijo = React.createRef();

  handleClick = () => {
    this.hijo.current.dispatchAlert(null, 'Dispatch desde padre');
  };

  render() {
    return (
      <div>
        <h1>Componente Padre</h1>
        <Hijo ref={this.hijo} />
        <button onClick={this.handleClick}>btn padre</button>
      </div>
    );
  }
};


export default App;
