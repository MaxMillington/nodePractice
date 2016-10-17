'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');
var VxFooter = require('./footer.jsx');

module.exports = React.createClass({

    render: function render() {
        return (
            <div className="vx_foreground-container container">

                <div className="vx_globalNav-main_mobile">
                    <div className="vx_globalNav-headerSection_trigger">
                        <label className="vx_globalNav-toggleTrigger" htmlFor="toggleNavigation">Menu</label>
                    </div>
                    <div className="vx_globalNav-headerSection_logo">
                        <a href="#" className="vx_globalNav-brand_mobile">
                            <span className="vx_a11yText">Summary</span>
                        </a>
                    </div>
                    <ul className="vx_globalNav-headerSection_actions">
                        <li className="vx_globalNav-actionItem_mobile vx_globalNav-notificationItem_mobile">
                            <a className="vx_globalNav-link_notifications vx_isCritical">
                    <span className="vx_globalNav-iconWrapper_secondary">
                        <span className="vx_globalNav-navIcon vx_globalNav-navIcon_linkNotifications">

                        </span>
                        <span className="vx_notificationCount">1</span>
                    </span>
                                <span className="vx_a11yText">Notifications</span>
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="vx_mainContent">
                    {this.props.children}
                </div>

                <VxFooter />

            </div>

        );
    }
});
