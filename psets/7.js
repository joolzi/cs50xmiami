/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  var str = "Babble babble babble bla bla bla";
  var res = str.replace(/b/g, "*");

  console.log(res);
}
fixStart('s'); 
