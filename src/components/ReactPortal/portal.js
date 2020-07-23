import React from 'react';
import ReactDOM from 'react-dom';

class PortalModal extends React.Component {
  render() {
    return ReactDOM.createPortal((
      <div>
        {this.props.children}
      </div>
    ), document.getElementById('modal-root'));
  }
};

export default PortalModal;