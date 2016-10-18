'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');
var VxHeader = require('./vxlibrary/header.jsx'),
    VxFooter = require('./vxlibrary/footer.jsx'),
    VxContent = require('./vxlibrary/content.jsx');


module.exports = React.createClass({

    getInitialState() {
        return {
            header: 'This is the Header',
            footer: 'This is the Footer',
            nav: 'Nav'
        };
    },

    render: function render() {

        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <title>
                    {this.props.title}
                </title>
                <link rel="stylesheet" href="css/style.css"/>
                <meta name="viewport" content="width=device-width"/>
                <link rel="stylesheet" href="/css/twbs-light.css"/>
                <link rel="stylesheet" href="/css/paypal-sans.css"/>
                <link rel="stylesheet" href="/css/vx-lib.css"/>
            </head>

            <body>
            <input type="checkbox" id="toggleNavigation" className="vx_globalNav-toggleCheckbox"/>


            <VxHeader />
            <VxContent >
                {this.props.children}
            </VxContent>

            <script src='/bundle.js'></script>
            <script src="/js/vx-lib.js"></script>
            </body>
            </html>
        );
    }
});
