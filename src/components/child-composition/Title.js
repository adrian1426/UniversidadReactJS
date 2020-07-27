import React from 'react';

const Title = (props) => {
  const { clicks, children } = props;

  return typeof children === 'function' ?
    children(clicks) :
    <span>{clicks}</span>;
};

export default Title;