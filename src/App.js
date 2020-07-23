import React from 'react';
import './App.css';



class PersistenciaEventos extends React.Component {
  state = {
    color: 'blue'
  };

  onChangeInput = (e) => {

    const color = e.target.value;

    // e.persist();

    // this.setState({
    //   color: e.target.value
    // });

    this.setState(() => ({
      color
    }));
  };

  render() {

    return (
      <div>
        <input type="text" onChange={this.onChangeInput} />
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
      </div>
    );
  }
}


const App = () => {
  return (
    <div className="App">
      <PersistenciaEventos />
    </div>
  );
};


export default App;
