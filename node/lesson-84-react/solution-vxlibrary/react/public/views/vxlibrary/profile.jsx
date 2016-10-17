'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');

module.exports = React.createClass({

    render: function render() {
        return (
            <div className="thisIsMyContent">

                <h1>Edit a User</h1>

                <form>

                    <div className="outerDual row">
                        <div className="col-md-6">
                            <div className="formRow row">
                                <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="email">Email Address</label>
                                <input className="col-md-6 col-sm-6 col-xs-11" type="text" id="email" name="email"
                                       required={true}/>
                            </div>
                            <div className="formRow row">
                                <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="password">Password</label>
                                <input className="col-md-6 col-sm-6 col-xs-11" type="password" id="password"
                                       name="password" required={true}/>
                            </div>
                            <div className="formRow row">
                                <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="firstname">First Name</label>
                                <input className="col-md-6 col-sm-6 col-xs-11" type="text" id="firstname"
                                       name="firstname"/>
                            </div>
                            <div className="formRow row">
                                <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="lastname">Last Name</label>
                                <input className="col-md-6 col-sm-6 col-xs-11" type="text" id="lastname"
                                       name="lastname"/>
                            </div>
                            <div className="formRow row">
                                <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="telephone">Telephone</label>
                                <input className="col-md-6 col-sm-6 col-xs-11" type="text" id="telephone"
                                       name="telephone"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="formRow row">
                                <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="street1">Street</label>
                                <input className="col-md-6 col-sm-6 col-xs-11" type="text" id="street1" name="street1"/>
                            </div>
                            <div className="formRow row">
                                <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="street2">Street</label>
                                <input className="col-md-6 col-sm-6 col-xs-11" type="text" id="street2" name="street2"/>
                            </div>
                            <div className="formRow row">
                                <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="city">City</label>
                                <input className="col-md-6 col-sm-6 col-xs-11" type="text" id="city" name="city"/>
                            </div>
                            <div className="formRow row">
                                <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="state">State</label>
                                <input className="col-md-6 col-sm-6 col-xs-11" type="text" id="state" name="state"/>
                            </div>
                            <div className="formRow row">
                                <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="zip">Zip Code</label>
                                <input className="col-md-6 col-sm-6 col-xs-11" type="text" id="zip" name="zip"/>
                            </div>

                        </div>
                    </div>

                    <div className="formTextarea row">
                        <label className="col-md-3 col-sm-3 col-xs-12" htmlFor="comment">Comment</label>
                        <textarea className="col-md-6 col-sm-6 col-xs-11" id="comment" name="comment" />
                    </div>

                    <div className="buttonRow">
                        <button type="submit">Save</button>
                        <button type="cancel">Cancel</button>
                    </div>
                </form>


            </div>
        );
    }
});
