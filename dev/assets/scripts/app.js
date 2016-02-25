var React          = require('react');
var ReactDOM       = require('react-dom');
var $              = jQuery = require('jquery');
var Request        = require('superagent');
var assign         = require('object-assign');

var Route          = require('react-router').Route;
var Router         = require('react-router').Router;
var IndexRoute     = require('react-router').IndexRoute;
var Link           = require('react-router').Link;
var hashHistory    = require('react-router').hashHistory;

var PokemonManager = require('./pokemon-manager');
var Loader         = require('./loader');
var Pokedex        = require('./pokedex');
var SearchBar      = require('./search-bar');
var Modal          = require('./modal');

window.maxIdDex = 718;

var App = React.createClass({
  componentDidMount: function() {
  },

  render: function() {
    //         // {this.props.children}
            console.log(this.props.params.idDex);
    return (
      <div>
        <ul>
          <li><Link to="/region/kalos">Kalos</Link></li>
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

  componentDidMount: function() {
    console.log(this.props);
    if (this.props.idDex) {
      Request
        .get(`http://pokeapi.co/api/v1/pokemon/${this.props.idDex}/`)
        .set('Accept', 'application/json')
        .end(function(err, res){
          if (err || !res.ok) {
            alert('Oh no! error');
          } else {
            var pkmn = res.body;
            var pkmnDatas = PokemonManager.compute(pkmn);
            // pkmnDatas = assign(pkmnDatas, handlerDatas);

            this.setState({
              pokemon: pkmnDatas,
              haveToShowModal: true
            });
            console.log("gergerger");
            $(ReactDOM.findDOMNode(this.refs.modal)).modal();
         }
        }.bind(this));
    };

    if (this.props.regionName) {
      this.setState({
        filterText: this.props.regionName
      });
    }; 
  },

  pkmnClicked: function(id) {
    
  },

  isLoading: function(isLoadingBOOL) {
    this.setState({
      isLoading: isLoadingBOOL
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <Pokedex filterText={this.state.filterText} appDelegate={this.pkmnClicked} loadingDelegate={this.isLoading}/>

        <Modal ref="modal" pokemon={this.state.pokemon} loadingDelegate={this.isLoading} isShowing={this.state.haveToShowModal} />
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

      { /* Manage default route*/}
      <Route path="*" component={App}/>
    </Route>
  </Router>
), document.getElementById('pokedex-container'))