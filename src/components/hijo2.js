import React from 'react';

class Hijo2 extends React.Component {

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid blue', borderRadius: '5px' }}
        onClick={this.props.addB}
      >
        <h2>Componente Hijo2 ({this.props.num})</h2>
      </div>
    );
  }
};

export default Hijo2;