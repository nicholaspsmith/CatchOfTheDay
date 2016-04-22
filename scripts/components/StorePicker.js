/*
  StorePicker
  <StorePicker/>
*/

import React from 'react';
import { History } from 'react-router';
import  h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class StorePicker extends React.Component {

  goToStore(event) {
    event.preventDefault();
    var storeName = this.refs.storeName.value;
    this.history.pushState(null, '/store/' + storeName);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" ref="storeName" defaultValue={h.getFunName()} required/>
        <input type="submit"/>
      </form>
    )
  }
}

reactMixin.onClass(StorePicker, History);

export default StorePicker;
