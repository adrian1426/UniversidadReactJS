import React from 'react';

class Hijo extends React.Component {

  render() {
    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid red', borderRadius: '5px' }}
        onClick={this.props.addA}
      >
        <h2>Componente Hijo ({this.props.num})</h2>
      </div>
    );
  }
};

export default Hijo;