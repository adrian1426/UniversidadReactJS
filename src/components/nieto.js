import React from 'react';
import Bisnieto from './bisnieto';

class Nieto extends React.Component {

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid blue', borderRadius: '5px' }}
      >
        <h2>Componente Nieto</h2>
        <Bisnieto />
      </div>
    );
  }
};

export default Nieto;