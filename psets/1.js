/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...

var currentyear = 2016;

var playerdate = 1982;

var age = currentyear - playerdate;

console.log("You are "+ age + " or " + (age + 1));
