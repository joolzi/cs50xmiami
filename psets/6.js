/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  var beginworda = a.substring(0, 2);
  var beginwordb = b.substring(0, 2);
  var endworda = a.slice(2);
  var endwordb = b.slice(2);

  console.log( beginwordb + endworda + "","" + beginworda + endwordb);
}
mixUp('Julie', 'Horekens');
