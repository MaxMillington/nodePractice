'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');


var Header = React.createClass({
    render() {
        return (
            <div className="header"><h1>{this.props.header}</h1></div>
        );
    }
});

var Footer = React.createClass({
    render() {
        return (
            <div className="footer"><h1>{this.props.footer}</h1></div>
        );
    }
});

var Nav = React.createClass({
    render() {
        return (
            <div className="nav">
                <h1>Nav</h1>
                <Link to='/page1'>First</Link><br />
                <Link to='/page2'>Second</Link><br />
                <Link to='/page3'>Third</Link><br />
                <Link to='/page4'>Fourth</Link><br />
                <a href='/profile'>Profile</a><br />
            </div>
        );
    }
});

var Middle = React.createClass({
    render() {
        return (
            <div className="middle">{this.props.children}</div>
        );
    }
});


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
            <html>
            <head>
                <meta charSet='utf-8'/>
                <title>
                    {this.props.title}
                </title>
                <link rel="stylesheet" href="css/style.css"/>
            </head>
            <body>
            <div className="fullPageBox">
                <Header header={this.state.header}/>
                <div className="content">
                    <Nav nav={this.state.nav}/>
                    <Middle text="Hello, world.">
                        {this.props.children}
                    </Middle>
                </div>
                <Footer footer={this.state.footer}/>
            </div>
            <script src='/bundle.js'></script>
            </body>
            </html>
        );
    }
});
