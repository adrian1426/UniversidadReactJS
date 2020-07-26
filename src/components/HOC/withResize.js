import React from 'react';

const withResize = (Componente, config) => {
  return class extends React.Component {

    state = {
      width: config.width,
      height: config.height
    };

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    render() {
      return (
        <Componente
          width={this.state.width}
          height={this.state.height}
        />
      );
    }
  }
};

export default withResize;