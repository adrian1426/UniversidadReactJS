import React from 'react';

class MensajeError extends React.Component {

  state = {
    errorComponent: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ errorComponent: true, error });
  }


  render() {

    if (this.state.errorComponent) {
      return (
        <div>
          <h2>¡Wops!, algo salió mal, puedes recargar la página o contactar a servicio de soporte.</h2>
          <div style={{ color: 'orangered' }}>{this.state.error && this.state.error.toString()}</div>
        </div>
      );
    }

    return this.props.children
  }
};

export default MensajeError;