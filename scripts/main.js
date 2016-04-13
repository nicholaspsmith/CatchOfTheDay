/*
 *  Nicholas P Smith
 *  April 13, 2016
 *  React For Beginners
 *
 *  App: Catch of the Day
 *
 *  Notes: to use Emmett: ctrl + e
 */


var React = require('react');
var ReactDOM = require('react-dom');

/*
  App
  <App/>
*/

var App = React.createClass({
  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Stuff" />
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
});

/*
  Header
  <Header/>
*/

var Header = React.createClass({
  render: function() {
    return (
      <header className="top">
        <h1>Catch of the Day</h1>
        <h3 className="tagline">{this.props.tagline}</h3>
      </header>
    )
  }
});

/*
  Order
  <Order/>
*/

var Order = React.createClass({
  render: function() {
    return (
      <p>Order</p>
    )
  }
});

/*
  Inventory
  <Inventory/>
*/

var Inventory = React.createClass({
  render: function() {
    return (
      <p>Inventory</p>
    )
  }
});

/*
  StorePicker
  <StorePicker/>
*/


var StorePicker = React.createClass({

  render: function() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" ref="storeID" required/>
        <input type="submit"/>
      </form>
    )
  }

});

ReactDOM.render(<App/>, document.querySelector('#main'));
