var React     = require('react');
var $         = require('jquery');
var _         = require('underscore');

var Helpers   = require('./utils');
var Pokemon   = require('./pokemon');
var Modal = require('react-bootstrap').Modal;


/** @jsx React.DOM */
var Modal = React.createClass({displayName: 'Modal',
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (

      <div>fergreger</div>
    );
  }
});


module.exports = Modal;