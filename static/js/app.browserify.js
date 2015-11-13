'use strict';

var $ = require('jquery');  
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div className="page">
        <h1>Fishing Hole</h1>
      </div>
    );
  }
});

ReactDOM.render(  
  React.createElement(App, null),
  document.getElementById('content')
);