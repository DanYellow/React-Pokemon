var React     = require('react');
var $         = require('jquery');
var _         = require('underscore');
var classNames = require('classnames');

var Helpers   = require('./utils');
var Pokemon   = require('./pokemon');


var ModalHeader = React.createClass({
  render: function() {
    return (
      <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">
            <img className="pkmn-img" height="40" src={this.props.datas.sprite}/> 
            <span className="pkmn-name">{this.props.datas.name}</span>
          </h4>
      </div>
    )
  }

});


/** @jsx React.DOM */
var Modal = React.createClass({displayName: 'Modal',
  render: function() {
    return (
      <div className={classNames('modal fade pkmn-modal')} tabIndex="-1" role="dialog" id="pkmnModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader datas={this.props.pokemon} />
            <div className="modal-body">
              <p>One fine body&hellip;</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Modal;