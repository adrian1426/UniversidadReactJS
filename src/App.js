import React from 'react';
import { Counter, Title, Button } from './components/counter/Counter';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter>
          <Title />
          <Button type='increment' />
          <Button type='decrement' />

          <Title>
            {
              (clicks) => (
                <h1>***********{clicks}**************</h1>
              )
            }
          </Title>
        </Counter>
      </div>
    );
  }
};


export default App;
