import React from 'react';
import Hijo from './components/hijo';

/*
-Comunicación de componentes - react context
-transpaso de datos y funciones desde el hijo al padre  o del padre al hijo
-utilizando context api
*/

//{provider,consumer}
export const context = React.createContext();

class App extends React.Component {

  state = {
    clicks: 0
  };

  addClick = () => {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  };

  render() {
    return (
      <context.Provider value={{
        clicks: this.state.clicks,
        addClick: this.addClick
      }}>
        <div
          style={{ margin: '10px', padding: '10px', border: '1px solid black', borderRadius: '5px' }}
        >
          <h1>Componente Padre</h1>
          <Hijo />
        </div>
      </context.Provider>
    );
  }
};


export default App;
