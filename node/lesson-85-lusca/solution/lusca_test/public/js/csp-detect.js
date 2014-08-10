/**
 * Created by rdimaandal on 7/22/14.
 */
'use strict';

function detect() {
    var not;
    if (window.$) {
        document.write('*******' + window.$);
        not = '';
    } else {
        not = 'NOT ';
    }
    document.write('<h1>External script ' + not +  'loaded!</h1>');
}
detect();
