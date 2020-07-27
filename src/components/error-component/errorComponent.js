import React from 'react';

class ErrorComponent extends React.Component {

  state = {
    dispararError: false
  };

  dispatchError = () => {
    this.setState({
      dispararError: true
    });
  };

  render() {
    const { dispararError } = this.state;

    if (dispararError) {
      throw new Error('¡Lo siento he fallado!');
    }

    return (
      <button onClick={this.dispatchError}>btn error</button>
    );
  }
};

export default ErrorComponent;