import React from 'react';
import Nieto from './nieto';

class Hijo extends React.Component {

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid red', borderRadius: '5px' }}
      >
        <h2>Componente Hijo</h2>
        <Nieto />
      </div>
    );
  }
};

export default Hijo;