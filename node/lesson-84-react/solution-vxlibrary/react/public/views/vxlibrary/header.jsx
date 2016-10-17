'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');

module.exports = React.createClass({

    render: function render() {
        return (
            <div className="vx_globalNav-main" role="banner">

                <div className="vx_globalNav-container">
                    <a href="#" className="vx_globalNav-brand_desktop">
                        <span className="vx_a11yText">Summary</span>
                    </a>

                    <div className="vx_globalNav-secondaryNav_mobile">
                        <div className="vx_globalNav-listItem_mobileLogout">
                            <a href="#" className="vx_globalNav-link_mobileLogout">Log
                                out</a></div>
                        <div className="vx_globalNav-listItem_settings">
                            <a href="#" className="vx_globalNav-link_settings">
                    <span className="vx_globalNav-iconWrapper_secondary">
                    <span className="vx_globalNav-navIcon vx_globalNav-navIcon_linkSettings">
                    </span>
                    </span>
                                <span className="vx_a11yText">Profile</span>
                            </a>
                        </div>
                        <div>
                            <p className="vx_h5 vx_globalNav-displayName">John Doe</p>
                        </div>
                    </div>


                    <div className="vx_globalNav-navContainer">
                        <nav className="vx_globalNav-nav" role="navigation">

                            <ul className="vx_globalNav-list">
                                <li>
                                    <a href="/" className="vx_isActive vx_globalNav-links">Home</a>
                                </li>
                                <li>
                                    <a href="/profile" className="vx_globalNav-links">Profile</a>
                                </li>
                            </ul>

                            <ul className="vx_globalNav-list_secondary">

                                <li className="vx_hidden-phone">
                                    <label htmlFor="toggleSidepanel"
                                           className="vx_globalNav-link_notifications vx_isCritical">

                            <span className="vx_globalNav-iconWrapper_secondary">
                                <span className="vx_globalNav-navIcon vx_globalNav-navIcon_linkNotifications"></span>
                                <span className="vx_notificationCount">1</span>
                            </span>
                                        <span className="vx_a11yText">Notifications</span>
                                    </label>
                                </li>

                                <li>
                                    <a href="#" className="vx_globalNav-link_settings">

                            <span className="vx_globalNav-iconWrapper_secondary">
                                <span className="vx_globalNav-navIcon vx_globalNav-navIcon_linkSettings"></span>
                            </span>
                                        <span className="vx_a11yText">Profile</span>
                                    </a>
                                </li>

                                <li className="vx_globalNav-listItem_logout">
                                    <a href="#"
                                       className="vx_globalNav-link_logout">
                                        Log out
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
});
