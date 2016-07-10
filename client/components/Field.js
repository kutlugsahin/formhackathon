import React, {Component} from 'react';

class Field extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="field">
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        <span className="text">{this.props.text}</span>
      </div>
    );
  }
}

export default Field;