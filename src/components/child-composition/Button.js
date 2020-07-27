import React from 'react';

const Button = (props) => {
  const { type, onIncrement, onDecrement } = props;

  const action = () => {
    return type === 'increment' ? onIncrement() : onDecrement();
  };

  return (
    <button onClick={action}>
      {type === 'increment' ? 'Agregar' : 'Quitar'}
    </button>
  );
};

export default Button;