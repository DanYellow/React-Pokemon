var React          = require('react');
var ReactDOM       = require('react-dom');
var $              = jQuery = require('jquery');
var Request        = require('superagent');
var assign         = require('object-assign');
var _              = require('underscore');

var Route          = require('react-router').Route;
var Router         = require('react-router').Router;
var IndexRoute     = require('react-router').IndexRoute;
var Link           = require('react-router').Link;
var hashHistory    = require('react-router').hashHistory;
var browserHistory    = require('react-router').browserHistory;

var PokemonManager = require('./pokemon-manager');
var Loader         = require('./loader');
var Pokedex        = require('./pokedex');
var SearchBar      = require('./search-bar');
var Modal          = require('./modal');


var Actions        = require('./actions');
var Store          = require('./stores');

window.maxIdDex = 718;

var App = React.createClass({
  getInitialState: function() {
    var kantoRange  = { 'name': 'kanto', 'range': [1, 151], 'generation': 'First generation' };
    var johtoRange  = { 'name': 'johto', 'range': [152, 251], 'generation': 'Second generation' };
    var hoennRange  = { 'name': 'hoenn', 'range': [252, 386], 'generation': 'Third generation' };
    var sinnohRange = { 'name': 'sinnoh', 'range': [387, 493], 'generation': 'Fourth generation' };
    var unysRange   = { 'name': 'unys', 'range': [494, 649], 'generation': 'fifth generation' };
    var kalosRange  = { 'name': 'kalos', 'range': [650, window.maxIdDex], 'generation': 'Sixth generation' };

    var regions = [kantoRange, johtoRange, hoennRange, sinnohRange, unysRange, kalosRange];

    return {
      regions: regions
    };
  },

  render: function() {
    var regionsList = []
    this.state.regions.forEach(function(region, index) {
      regionsList.push(<li key={index}><Link to={'region/' + region.name} activeStyle={{ color: "red"}}>{region.name}</Link></li>);
    });

    return (
      <div>
        <ul>
          {regionsList}
        </ul>
        <PokedexContainer idDex={this.props.params.idDex} regionName={this.props.params.regionName}/>
      </div>
    );
  }
});

var PokedexContainer = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      pokemon: {},
      isLoading: true,
      haveToShowModal: false
    };
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.idDex) {
      this.currentIdDex = this.props.idDex;
      Actions.pkmnSelected(this.currentIdDex);
    };

    if (newProps.regionName) {
      this.setState({
        filterText: newProps.regionName
      });
    };
  },

  // shouldComponentUpdate: function(nextProps, nextState) {
  //   // It avoid infinite loading on first loading
  //   console.log(_.isEmpty(nextProps), nextProps); // nextState.pokemon
  //   if (!_.isEmpty(nextProps)) {
  //     return true;
  //   };
  //   console.log('continued');
  //   return nextProps.idDex !== this.props.idDex;
  // },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);

    if (this.props.idDex) {
      this.currentIdDex = this.props.idDex;
      Actions.pkmnSelected(this.currentIdDex);
    };

    if (this.props.regionName) {
      this.setState({
        filterText: this.props.regionName
      });
    }; 
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    // Avoid "ghostering" of the page
    if (!_.isEmpty(Store.pkmn) && !Store.isLoading) {
      $(ReactDOM.findDOMNode(this.refs.modal)).modal();
    };

    this.setState({
      pokemon: Store.pkmn,
      isLoading: Store.isLoading
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <Pokedex filterText={this.state.filterText} />
        <Modal ref='modal' pokemon={this.state.pokemon} />

        {this.state.isLoading ? <Loader /> : null}
      </div>
    );
  }
});


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="pkmn/:idDex" component={App} />
      <Route path="region/:regionName" component={App} />

      { /* Manage default route*/ }
      <Route path="*" component={App}/>
    </Route>
  </Router>
), document.getElementById('pokedex-container'))
