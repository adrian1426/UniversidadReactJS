import React, { Component } from 'react';
import styles from './TarjetaFruta.module.css';

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
    const claseTarjeta = `${styles.card} ${hasItem ? styles['card-active'] : ''}`;

    return (
      <div className={claseTarjeta}>
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