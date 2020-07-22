import React, { Component } from 'react';

class Fruta extends Component {

  constructor() {
    super();
    this.state = {
      cantidad: 0
    };

    this.handleAumentarCantidad = this.handleAumentarCantidad.bind(this);
  };

  handleAumentarCantidad() {
    this.state.cantidad = this.state.cantidad + 1;
    this.forceUpdate();
  };

  render() {
    const { nombre, precio } = this.props;
    const { cantidad } = this.state;

    return (
      <div>
        <h1>Fruta: {nombre}</h1>
        <h2>Precio: ${precio}</h2>
        <h3>Cantidad: {cantidad}</h3>
        <hr />
        <button
          onClick={this.handleAumentarCantidad}
        >
          aumentar cantidad
        </button>
      </div>
    );
  };

};

export default Fruta;