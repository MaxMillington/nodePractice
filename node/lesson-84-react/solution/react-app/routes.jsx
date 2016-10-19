'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Layout = require('./public/views/layout.jsx');
var Home = require('./public/views/home.jsx');
var Page1 = require('./public/views/page1.jsx');
var Page2 = require('./public/views/page2.jsx');
var Page3 = require('./public/views/page3.jsx');
var Page4 = require('./public/views/page4.jsx');

var routes = module.exports = (
    <Router>
        <Route path='/' component={Layout}>
            <IndexRoute component={Home} />
            <Route path='/page1' component={Page1} />
            <Route path='/page2' component={Page2} />
            <Route path='/page3' component={Page3} />
            <Route path='/page4' component={Page4} />
        </Route>
    </Router>
);
