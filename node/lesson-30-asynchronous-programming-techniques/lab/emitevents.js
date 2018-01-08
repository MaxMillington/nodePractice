'use strict';

var eventEmitter = require('events').EventEmitter;
var util = require('util');

function BasicEmitter() {
        this.emit('start');
        this.emit('data', 'somedata');
}
// BasicEmitter inherits from EventEmitter
util.inherits(BasicEmitter, eventEmitter);


var emitter = new BasicEmitter();

// start event will trigger callback to startCallback
emitter.on('start', function startCallback() {
    console.log('Processing has started');
});

// data event will trigger callback to dataCallback
emitter.on('data', function dataCallback(chunk) {
    console.log('Received: ' + chunk);
});

