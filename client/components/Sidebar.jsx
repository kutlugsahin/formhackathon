import React, {Component} from 'react';
import Field from './Field';
import Sortable from 'sortablejs';
import FieldType from './FieldTypes.js';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.initSortable = this.initSortable.bind(this);
  }

  render() {
    return (
      <div ref="list" className="sidebar col-sm-3 col-md-2">
        <Field type={FieldType.textInput} text="Text Input"/>
        <Field type={FieldType.header} text="Header"/>
        <Field type={FieldType.textArea} text="Text Area"/>
      </div>
    );
  }

  componentDidMount() {
    this.initSortable();
  }

  initSortable() {
    let opt = {
      sort: false,
      group: {
        name: 'fields',
        pull: 'clone',
        put: ['fields']
      }
    }

    let list = this.refs.list;
    Sortable.create(list, opt);
  }

}

export default Sidebar;