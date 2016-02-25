var React    = require('react');

/** @jsx React.DOM */
var Loader = React.createClass({
  componentWillUnmount: function() {
    // console.log("hello");
  },

  render: function() { 
          // <img src="assets/images/pika-loader-mini.gif" />
    return (
      <div className="loader">
        <figure className="indicator">
          <figcaption>Loading</figcaption>
        </figure>
      </div>
    );
  } 
});

module.exports = Loader;
