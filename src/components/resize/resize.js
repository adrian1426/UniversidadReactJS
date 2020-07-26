import React from 'react';
import PropTypes from 'prop-types';

class Resize extends React.Component {

  state = {
    width: window.innerWidth,
    height: window.innerHeight
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
    const { width, height } = this.state;
    const { myRender } = this.props;

    return myRender({ width, height });
  }
};

Resize.propTypes = {
  myRender: PropTypes.func.isRequired
};

export default Resize;