'use strict';

var React = require('react');

module.exports = React.createClass({

    render: function render() {

        return (
            <html>
            <head>
                <meta charSet='utf-8' />
                <title>
                    {this.props.title}
                </title>
            </head>
            <body>
            Hello, World.
            <script src='/bundle.js'></script>
            </body>
            </html>
        );
    }
});
