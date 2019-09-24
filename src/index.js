'use strict'

var React = require('react')
var ReactDOM = require('react-dom')
var Title = require('./app')
var Body = require('./components/title')

ReactDOM.render(
    React.createElement(Title, Body), 
    document.querySelector('[data-js="app"]')
)