import React, { Component } from 'react';

class Fruta extends Component {

  state = {
    cantidad: 0
  };

  handleAumentarCantidad = () => {
    this.state.cantidad = this.state.cantidad + 1;
    this.forceUpdate();
  };

  handleRestarCantidad = () => {
    this.setState({ cantidad: this.state.cantidad - 1 });
  };

  render() {
    const { nombre, precio } = this.props;
    const { cantidad } = this.state;

    const hasItem = cantidad > 0;

    const styles = {
      border: '1px solid black',
      marginBottom: '1em',
      borderRadius: '0.5em',
      padding: '1em',
      background: hasItem ? 'linear-gradient(45deg, black,#4a02f7)' : '#FFF',
      color: hasItem ? '#FFF' : '#000',
      transition: 'all 400ms ease-out'
    };

    return (
      <div style={styles}>
        <h1>Fruta: {nombre}</h1>
        <h2>Precio: ${precio}</h2>
        <h3>Cantidad: {cantidad}</h3>
        <hr />
        <button onClick={this.handleAumentarCantidad}>
          aumentar cantidad
        </button>

        <button onClick={this.handleRestarCantidad}>
          restar cantidad
        </button>
      </div>
    );
  };

};

export default Fruta;