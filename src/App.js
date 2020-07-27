import React from 'react';
import Parent from './components/parent/parent';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Parent>
          Hijo de parent
          <h2>texto de parent</h2>
          {`template string`}
          {() => { }}
        </Parent>
      </div>
    );
  }
};


export default App;
