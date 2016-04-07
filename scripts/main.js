var React = require('react');
var ReactDOM = require('react-dom');

/*
  StorePicker
  Renders <StorePicker/>
*/

//
// To use emmett:
// ctrl + e
//

var StorePicker = React.createClass({

  render: function() {
    return (
      <form>
        <h2>Please Enter a Store</h2>
        <input type="text" ref="storeID"/>
        <input type="submit"/>
      </form>
    )
  }

});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
