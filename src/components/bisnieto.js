import React from 'react';
import PubSub from 'pubsub-js';

class Bisnieto extends React.Component {

  state = {
    message: '*******************'
  };

  componentDidMount() {
    PubSub.subscribe('saludoPadre', (e, data) => {
      this.setState({ message: data.title });
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe('saludoPadre');
  }

  handleClick = () => {
    PubSub.publish('saludo', 'hola desde el bisnieto');
  };

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid green', borderRadius: '5px' }}
      >
        <h2>Componente Bisnieto</h2>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>bisnieto</button>
      </div>
    );
  }
};

export default Bisnieto;