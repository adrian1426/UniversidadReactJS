import React from 'react';

const withCounter = (Componente) => {
  return class extends React.Component {

    state = {
      num: 0
    };

    add = () => {
      this.setState(state => ({
        num: state.num + 1
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