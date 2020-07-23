import React from 'react';

const Title = (props) => {

  const { uiColor, texto, children } = props;

  console.log(children);

  const style = {
    padding: '0.3em',
    color: '#FFF',
    background: uiColor,
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  };

  return (
    <div>
      <h1 style={style} >
        {texto}
      </h1>
      <br />
      {children}
    </div>
  );
};

export default Title;