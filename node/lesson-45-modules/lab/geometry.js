'use strict';

// var circle = require('./shapes').circle;
// var rectangle = require('./shapes').rectangle;
// var triangle = require('./shapes').triangle;

var shapes = require('./shapes');

console.log('The circumference of a circle of radius 4 is ' + shapes.circle.circumference(4));
console.log('The area of a circle of radius 4 is ' + shapes.circle.area(4));
console.log('The perimeter of a rectangle with width 5 and height 5 is ' + shapes.rectangle.perimeter(5, 5));
console.log('The area of a rectangle with width 5 and height 7 is ' + shapes.rectangle.area(5, 7));
console.log('The area of a triangle with base 5 and height 10 is ' + shapes.triangle.area(5, 10));
