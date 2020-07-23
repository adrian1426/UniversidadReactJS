import React from 'react';
import './App.css';



class App extends React.Component {
  state = {
    marcado: `
    <h1>Inyectando html</h1>
    <br/>
    <hr/>
    <a href="#">link</a>
    `
  };

  render() {
    return (
      <div className="App">
        <div dangerouslySetInnerHTML={{
          __html: this.state.marcado
        }}></div>
      </div>
    );
  }
};


export default App;
