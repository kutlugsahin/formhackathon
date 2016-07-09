import React, {Component} from 'react';
import Field from './Field';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar col-sm-3 col-md-2">
        <Field/>
      </div>
    );
  }
}

export default Sidebar;