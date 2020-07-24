import React from 'react';

class Bisnieto extends React.Component {

  state = {
    message: '*******************'
  };

  handleClick = () => {
    this.setState({
      message: window.title
    });
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