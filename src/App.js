import React from 'react';
import Resize from './components/resize/resize';

/*
-Comunicación de componentes - Render props - hijo a padre
-transpaso de datos y funciones desde el hijo al padre
-utilizando render props, pasando funciones de renderizado o html desde props
-la prop como convención se le pone como "render"
*/


class App extends React.Component {

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px' }}
      >
        <h1>Componente Padre</h1>
        <Resize
          myRender={(data) => {
            return (
              <div>
                <h2>Width: {data.width}</h2>
                <h2>Height: {data.height}</h2>
              </div>
            )
          }}
        />
      </div>
    );
  }
};


export default App;
