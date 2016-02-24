var React      = require('react');
var $          = require('jquery');
var _          = require('underscore');
var classNames = require('classnames');
var ReactDOM   = require('react-dom');
require('bootstrap');

var Helpers    = require('./utils');
var Pokemon    = require('./pokemon');

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
          <Types datas={this.props.datas.types} />
      </div>
    )
  }
});

var ModalBody = React.createClass({
  render: function() {
    return (
      <div className="modal-body">
        <Evolutions datas={this.props.datas.evolutions} />
        <Abilities datas={this.props.datas.abilities} />
        <MovesContainer datas={this.props.datas.moves} />
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
});


var Types = React.createClass({
  render: function () {
    if (!this.props.datas) {
      return null;
    };

    var types = this.props.datas.map(function(type, index){
      return <li className={classNames(type.name)} key={index}>{type.name}</li>
    });

    return(
      <ul className="list-unstyled pkmn-types">
        {types}
      </ul>
    )
  }
});


var MovesHeader = React.createClass({
  render: function() {
    return (
      <div className="panel-heading" role="tab" id={'heading' + this.props.id}>
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href={'#collapse' + this.props.id}>{this.props.datas}</a>
        </h4>
      </div>
    )
  }
});


var MovesListItem = React.createClass({
  render: function() {

    return (
      <tr>
        <td>{this.props.datas.name}</td>
        {this.props.datas.level ? <td>{this.props.datas.level} </td> : null }
      </tr>
    )
  }

});

// List every move for a given category
var MovesList = React.createClass({
  render: function() {
    var move = [];
    var moves = this.props.datas.map(function(movePkmn) {
      return <MovesListItem datas={movePkmn} key={movePkmn.name} />;
    });

    return (
      <div className="panel-collapse collapse" role="tabpanel" id={'collapse' + this.props.id}>
        <table className="table">
          <tbody>
            { moves }
          </tbody>
        </table>
      </div>
    )
  }
});


var MovesContainer = React.createClass({
  render: function () {
    if (!this.props.datas || _.isEmpty(this.props.datas)) {
      return null;
    };

    var tableMoves = [];
    // We sort alphabetically the type of the attacks
    var moves = Object.keys(this.props.datas).sort().forEach(function(typeMoves, index, array) {
      tableMoves.push(<MovesHeader datas={typeMoves} key={typeMoves} id={index} />)
      tableMoves.push(<MovesList datas={this.props.datas[typeMoves]} key={index}  id={index}/>)
    }.bind(this));

    return(
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <h4 className="caracteristic">Moves list</h4>
        <div className="panel panel-default">
          {tableMoves}
        </div>
      </div>
    )
  }
});


var Abilities = React.createClass({
  render: function () {
    if (!this.props.datas || this.props.datas.length === 0) {
      return null;
    };

    var abilities = this.props.datas.map(function(ability, index) {
      return <li className="pkmn-abilities__item" key={index}>{ability}</li>;
    });

    return (
      <div>
        <h4 className="caracteristic">Abilities</h4>
        <ul className="pkmn-abilities list-unstyled">
          { abilities }
        </ul>
      </div>
    )
  }
});


var Evolutions = React.createClass({
  render: function() {
    if (!this.props.datas || this.props.datas.length === 0) {
      return null;
    };

    var evolutions = this.props.datas.map(function(evolution, index) {
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
  getInitialState: function() {
    return {
      isShowing: false
    };
  },

  componentDidMount: function() {
    $(ReactDOM.findDOMNode(this)).on('shown.bs.modal, show.bs.modal', this.modalLoaded);
  }, 

  modalLoaded: function() {
    this.props.loadingDelegate(false);
  },

  render: function() {
    var divStyle = {};

    if (this.props.isShowing) {
      divStyle = {
        paddingRight: '15px',
        display: 'block'
      }
    } else {
      divStyle = {
        display: 'none'
      }
    }

    return (
      <div className={classNames('modal fade pkmn-modal')} style={divStyle} tabIndex="-1" role="dialog" id="pkmnModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader datas={this.props.pokemon} />
            <ModalBody datas={this.props.pokemon} />
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Modal;