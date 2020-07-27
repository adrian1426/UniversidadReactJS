import React from 'react';

const Parent = (props) => {
  const { children: childrenOriginal } = props;

  //React.Children.map, solo regresa los elementos que se pueden renderizar
  //React.Children: tiene varias funciones que evaluan, arreglos, cuentan los children, etc.
  const children = React.Children.map(childrenOriginal, (child) => {
    return child;
  });

  return (
    <div className="box">
      <div className="box blue">
        {children}
      </div>
    </div>
  );
};

export default Parent;