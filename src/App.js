import React from 'react';
import Title from './components/Title/title';
import './App.css';

class App extends React.Component {

  state = {
    uiColor: 'purple'
  };

  render() {
    return (
      <div className="App">
        <Title
          uiColor={this.state.uiColor}
          texto={<div>Adrian <em>Hernandez</em></div>}
        >
          <div><h1>Adrian 2 <em>Hernandez</em></h1></div>
        </Title>
      </div>
    );
  }
};


export default App;
