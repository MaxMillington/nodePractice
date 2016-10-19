'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');

module.exports = React.createClass({

    render: function render() {
        return (
            <div id='home'>
                <h1>This is the second page</h1>
                <Link to="/">Go to the Home Page</Link>
                <h6>I am a React Router rendered view</h6>
                <Link to='/page3'>Click for Third Page</Link><br />
            </div>
        );
    }
});
