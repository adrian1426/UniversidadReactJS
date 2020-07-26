import React from 'react';
import Hijo from './components/hijo';

/*
-Comunicación de componentes - Render props - hijo a padre
-transpaso de datos y funciones desde el hijo al padre
-utilizando render props, pasando funciones de renderizado o html desde props
-la prop como convención se le pone como "render"
*/


class App extends React.Component {

  state = {
    fruits: [
      { name: 'Fresa', price: 20 },
      { name: 'Mango', price: 10 },
      { name: 'Plátano', price: 10 },
      { name: 'Uva', price: 30 }
    ]
  };

  render() {
    const { fruits } = this.state;
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px' }}
      >
        <h1>Componente Padre</h1>
        <Hijo
          listaFrutas={fruits}
          render={(item, i) => (
            <h1 key={i}>*******{item.name}********</h1>
          )}
        />
      </div>
    );
  }
};


export default App;
