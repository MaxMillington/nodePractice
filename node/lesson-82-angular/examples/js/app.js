/**
 * Created by clboyd on 1/13/15.
 */

(function () {

    var app = angular.module('hello-world', []);

    app.controller('HelloWorldController', function () {
        this.product = gem;
    });

    var gem = {
        name: 'diamond',
        price: 2.95,
        description: "This is a  diamond."
    };
})();

function HelloWorld() {
    alert("Hello world... is ready.");
}
