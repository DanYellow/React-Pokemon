var React     = require('react');
var $         = require('jquery');
var _         = require('underscore');
var classNames = require('classnames');

var Helpers   = require('./utils');
var Pokemon   = require('./pokemon');

/** @jsx React.DOM */
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

var ModalBody = React.createClass({
  render: function() {
    return (
      <div className="modal-body">
        <Evolutions datas={this.props.datas} />
      </div>
    )
  }
});

/**
 * Return a ReactView for a Pokemon Evolution
 * @return {[type]}   [description]
 */
var PokemonEvolution = React.createClass({
  render: function() {
    return(
      <li className="pkmn-evolutions__item">
        <img height="60" src={this.props.datas.sprite}/>
        <a className="pkmn-name">
            {this.props.datas.to + ' '}
            {this.props.datas.level ? '(level: ' + this.props.datas.level + ')' : '(method: ' + this.props.datas.method + ')'}</a>
      </li>
    )
  }
})

var Evolutions = React.createClass({
  render: function() {
    if (!this.props.datas.evolutions) {
      return null;
    };
    var evolutions = this.props.datas.evolutions.map(function(evolution, index) {
      return <PokemonEvolution datas={evolution} key={index}/>;
    });

    return (
      <div>
        <h4 className="caracteristic">Evolves to</h4>
        <ul className="pkmn-evolutions list-unstyled">
          { evolutions }
        </ul>
      </div>
    )
  }
});



var Modal = React.createClass({displayName: 'Modal',
  render: function() {
    return (
      <div className={classNames('modal fade pkmn-modal')} tabIndex="-1" role="dialog" id="pkmnModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader datas={this.props.pokemon} />
            <ModalBody datas={this.props.pokemon} />

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