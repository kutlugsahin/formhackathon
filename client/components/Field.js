import React, {Component} from 'react';

class Field extends Component {
  render() {
    return (
      <div className="field">
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        <span className="text">Text Input</span>
      </div>
    );
  }
}

export default Field;