var React    = require('react');

/** @jsx React.DOM */
var Loader = React.createClass({
  componentWillUnmount: function() {
    console.log(this.props.children);
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
