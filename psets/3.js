/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

var radius = 4;

var circ = (2*radius) * Math.PI;

var area = Math.PI * Math.sqrt(radius);

console.log("The circumference is "+ circ + " The area is " + area);
