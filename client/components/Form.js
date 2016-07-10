import React, {Component} from 'react';
import FieldType from './FieldTypes.js';
import Sortable from 'sortablejs';

class Form extends Component {
  constructor(props) {
    super(props);
    this.initSortable = this.initSortable.bind(this);
    this.onElementMove = this.onElementMove.bind(this);
  }

  render() {
    return (
      <div className="col-sm-offset-3 col-md-offset-2">
        <div ref="form" className="form">
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.initSortable();
  }

  initSortable() {
    let opt = {
      sort: true,
      animation: 150,
      group: {
        name: 'fields',
        pull: false,
        put: true
      },
      scroll: true, // or HTMLElement
      scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
      scrollSpeed: 10, // px
      onMove: this.onElementMove
    }

    let form = this.refs.form;
    Sortable.create(form, opt);
  }

  onElementMove(event) {
    console.log(event);
  }
}

export default Form;