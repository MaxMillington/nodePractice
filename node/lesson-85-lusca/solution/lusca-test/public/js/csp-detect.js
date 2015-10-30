'use strict';

function detect() {
    var not;
    if (window.$) {
        not = '';
    } else {
        not = 'NOT ';
    }
    document.write('<h1>External script ' + not +  'loaded!</h1>');
}
detect();
