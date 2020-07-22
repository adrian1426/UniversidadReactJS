import React from 'react';

const Message = {

  Error: () => {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  },
  Success: () => {
    return (
      <div
        style={{
          border: '1px solid black',
          maxWidth: '100px',
          marginLeft: '200px'
        }}
      >
        <h1>Exito</h1>
      </div>
    );
  }
};

export default Message;