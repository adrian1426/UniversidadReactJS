import React from 'react';

const withCounter = (Componente, config) => {
  return (config2) => class extends React.Component {

    state = {
      num: config.click
    };

    add = () => {
      this.setState(state => ({
        num: state.num + config2.constSuma
      }));
    };

    render() {
      return (
        <Componente
          num={this.state.num}
          add={this.add}
        />
      )
    }
  }
};

export default withCounter;