import React from 'react';
import PropTypes from 'prop-types';

class Perfil extends React.Component {
  render() {
    const { nombre, biografia, email } = this.props;
    return (
      <div>
        <h1>{nombre}</h1>
        <p>{biografia}</p>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    );
  }
};

Perfil.propTypes = {
  nombre: PropTypes.string.isRequired,
  biografia: PropTypes.string,
  email: PropTypes.string
};

Perfil.defaultProps = {
  nombre: 'Adriancito hernandez'
};

export default Perfil;