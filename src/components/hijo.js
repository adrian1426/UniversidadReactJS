import React from 'react';

class Hijo extends React.Component {

  handleClick = (e) => {
    // e.stopPropagation();
    e.miSaludo = 'Hola desde el hijo por propagación';
    console.log('click en hijo')
  };

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid red', borderRadius: '5px' }}
        onClick={this.handleClick}
      >
        <h2>Componente Hijo</h2>
      </div>
    );
  }
};

export default Hijo;