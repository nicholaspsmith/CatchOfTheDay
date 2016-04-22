/*
  StorePicker
  <StorePicker/>
*/

import React from 'react';
import { History } from 'react-router';
import  h from '../helpers';

var StorePicker = React.createClass({
  mixins: [History],
  goToStore: function(event) {
    event.preventDefault();
    var storeName = this.refs.storeName.value;
    this.history.pushState(null, '/store/' + storeName);
  },
  render: function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" ref="storeName" defaultValue={h.getFunName()} required/>
        <input type="submit"/>
      </form>
    )
  }

});

export default StorePicker;
