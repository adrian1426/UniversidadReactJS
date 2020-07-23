import React from 'react';

class Boton extends React.Component {

  state = {
    mensaje: '****'
  };

  dispatchAlert = (e, message) => {
    alert(message);
    this.setState({ mensaje: message });
  };

  render() {
    return (
      <div>
        <h2>Componente Hijo {this.state.mensaje}</h2>
        <button onClick={() => this.dispatchAlert(null, 'desde el hijo')}>btn hijo</button>
      </div>
    );
  }
};

export default Boton;