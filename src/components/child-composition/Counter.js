import React, { useState } from 'react';
import Title from './Title';
import Button from './Button';

const Counter = (props) => {
  const [clicks, setClick] = useState(0);
  const { children } = props;

  const increment = () => {
    setClick(clicks + 1);
  };

  const decrement = () => {
    setClick(clicks - 1);
  };

  if (!children) {
    const stlyes = {
      background: 'tomato',
      borderRadius: '0.2em',
      padding: '0.3em 1em',
      color: '#FFF'
    }

    return (
      <div style={stlyes}>
        <h2>!Wops¡, debes agregar un componente como hijo</h2>
      </div>
    );
  }

  const _children = React.Children.map(children, (child) => {
    let propiedades = {};

    if (child.type === Title) {
      propiedades.clicks = clicks;
    }

    if (child.type === Button) {
      propiedades.onIncrement = increment;
      propiedades.onDecrement = decrement;
    }

    return React.cloneElement(child, propiedades)
  });

  return _children;
};

export default Counter;