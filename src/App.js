import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    click: 0
  };

  addClick = () => {
    this.setState({
      click: this.state.click + 1
    });
  };

  addClick2 = () => {
    this.setState((prevState, props) => {
      if (prevState.click === 5) {
        return null;
      }

      return {
        click: prevState.click + 1
      }

    });
  };

  addClick3 = () => {
    this.setState(prevState => (
      {
        click: prevState.click + 1
      }
    ));
  };


  render() {
    return (
      <div className="App">
        <button onClick={this.addClick2}>clicks ({this.state.click})</button>
      </div>
    );
  }
}

export default App;
