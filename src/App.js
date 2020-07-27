import React from 'react';
import Counter from './components/child-composition/Counter';
import Title from './components/child-composition/Title';
import Button from './components/child-composition/Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter >
          <Title />
          <Title>
            {(click) => (
              <h3>clickss {click}</h3>
            )}
          </Title>
          <Button type='increment' />
          <Button type='decrement' />
        </Counter>
      </div>
    );
  }
};


export default App;
