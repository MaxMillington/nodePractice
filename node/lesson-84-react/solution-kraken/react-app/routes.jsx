'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Layout = require('./public/views/layout.jsx');

var routes = module.exports = (
    <Router>
        <Route path='/' component={Layout}>
        </Route>
    </Router>
);
