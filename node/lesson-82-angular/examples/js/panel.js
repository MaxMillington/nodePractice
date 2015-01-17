/**
 * Created by clboyd on 1/13/15.
 */

(function () {

    var app = angular.module('panel', []);

    app.controller('PanelController', function () {
        this.tab = 1;
        this.set = function(tab) {
            this.tab = tab;
        };
        this.isSelected = function(tab) {
            return this.tab === tab;
        };
    });

    app.directive('cityPanels', function() {
       return {
           restrict: 'E',
           templateUrl: 'city-panels.html',
           controller: function() {
               this.tab = 1;
               this.set = function(tab) {
                   this.tab = tab;
               };
               this.isSelected = function(tab) {
                   return this.tab === tab;
               };
           },
           controllerAs: 'tab'
       };
    });
})();

