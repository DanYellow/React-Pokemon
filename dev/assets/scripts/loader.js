var React    = require('react');

/** @jsx React.DOM */
var Loader = React.createClass({
  componentWillUnmount: function() {
    console.log("hello");
  },

  render: function() { 
    return (
      <div className="loader">
        <img src="assets/images/pika-loader-mini.gif" />
      </div>
    );
  } 
});

module.exports = Loader;
