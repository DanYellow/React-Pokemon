var React    = require('react');

/** @jsx React.DOM */
var Loader = React.createClass({
  componentWillUnmount: function() {
    // console.log("hello");
  },

  render: function() { 
    return (
      <div className="loader">
        <figure className="indicator">
          <img src="assets/images/pika-loader-mini.gif" />
          <figcaption>Loading</figcaption>
        </figure>
      </div>
    );
  } 
});

module.exports = Loader;
