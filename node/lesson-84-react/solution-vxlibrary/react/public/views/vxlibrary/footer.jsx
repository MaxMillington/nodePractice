'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');

module.exports = React.createClass({

    render: function render() {
        return (
            <div className="vx_globalFooter">

                <div className="vx_globalFooter-content">

                    <ul className="vx_globalFooter-list">
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="/security">Security</a></li>
                    </ul>

                    <div className="vx_globalFooter_secondary">

                        <p className="vx_globalFooter-copyright">
                            ©1999-2016 PayPal, Inc. All rights reserved.
                        </p>
                        <ul className="vx_globalFooter-list_secondary">
                            <li href="#">Privacy</li>
                            <li href="#">Feedback</li>
                        </ul>
                    </div>
                    <p className="vx_globalFooter-disclaimer">
                        This is the bottom disclaimer
                    </p>
                </div>
            </div>
        );
    }
});
