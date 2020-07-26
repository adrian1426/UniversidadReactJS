import React from 'react';
import { context } from '../App';

const Nieto = () => {

  return (
    <context.Consumer>
      {
        (contexto) => (
          <div
            style={{ margin: '10px', padding: '10px', border: '1px solid blue', borderRadius: '5px' }}
          >
            <h2>Componente Nieto</h2>
            <button onClick={contexto.addClick}>nieto</button>
            {contexto.clicks}
          </div>
        )

      }
    </context.Consumer>
  );
};

export default Nieto;