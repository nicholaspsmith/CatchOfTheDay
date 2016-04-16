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

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');

/*
  App
  <App/>
*/

var App = React.createClass({
  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
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
        <h1>Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
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


/*
  Not Found
*/

var NotFound = React.createClass({
  render: function() {
    return <h1>Not found</h1>
  }
});

/*
  Routes
*/

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeName" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)


ReactDOM.render(routes, document.querySelector('#main'));
