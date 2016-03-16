var React    = require('react');

/** @jsx React.DOM */
var Loader = React.createClass({
  componentDidMount: function() {
    this._startAnimation();
  },

  _startAnimation: function () { 
    var frames = document.getElementById('animation').children;
    var frameCount = frames.length;
    var i = 0;
    setInterval(function () { 
      frames[i % frameCount].style.display   = 'none';
      frames[++i % frameCount].style.display = 'block';
    }, 60);
  },

  render: function() { 
    return (
      <div className="loader"> 
        <figure className="indicator">
          <div id="animation">
              <img src='assets/images/pika-loader-0.png' />
              <img src='assets/images/pika-loader-1.png' />
              <img src='assets/images/pika-loader-2.png' />
              <img src='assets/images/pika-loader-3.png' />
          </div>
          <figcaption>Loading</figcaption>
        </figure>
      </div>
    );
  } 
});

module.exports = Loader;
