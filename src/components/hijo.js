import React from 'react';

class Hijo extends React.Component {

  render() {
    const { listaFrutas, render } = this.props;

    return (
      <div
        style={{ margin: '10px', padding: '10px', border: '1px solid red', borderRadius: '5px' }}
      >
        <h2>Componente Hijo</h2>
        {
          listaFrutas.map((item, i) => {

            if (render) {
              return render(item, i);
            }

            return (
              <li key={i}>{item.name} ${item.price}</li>
            )
          })
        }
      </div>
    );
  }
};

export default Hijo;