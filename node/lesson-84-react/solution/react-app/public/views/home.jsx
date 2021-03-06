'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');

module.exports = React.createClass({

    displayName: 'home',

    render: function render() {
        return (
            <div id='home'>
                <h1>This is the home page</h1>
                <Link to="/">Go to the Home Page</Link>
                <h6>I am a React Router rendered view</h6>
                <Link to='/page1'>Click for First Page</Link><br />
                <Link to='/page2'>Click for Second Page</Link><br />
                <Link to='/page3'>Click for Third Page</Link><br />
                <Link to='/page4'>Click for Fourth Page</Link><br />
            </div>
        );
    }
});
