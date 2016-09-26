'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Layout = require('./public/views/layout.jsx');
var Home = require('./public/views/home.jsx');
var First = require('./public/views/first.jsx');
var Second = require('./public/views/second.jsx');
var Third = require('./public/views/third.jsx');
var Fourth = require('./public/views/fourth.jsx');

var routes = module.exports = (
    <Router>
        <Route path='/' component={Layout}>
            <IndexRoute component={Home} />
            <Route path='/first' component={First} />
            <Route path='/second' component={Second} />
            <Route path='/third' component={Third} />
            <Route path='/fourth' component={Fourth} />
        </Route>
    </Router>
);
