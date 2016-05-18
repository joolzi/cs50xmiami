/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function pluralize(noun, number){
  if (number > 1){
      console.log(number + " " + noun.concat('s'));
    }
  else {
    console.log(number +" "+ noun);
  }
}

pluralize("goat", "5");
pluralize("cat", "2");
pluralize("camel", "0");


// BONUS TO FINISH
// if (noun = "sheep"){
//   console.log(number + " " + "sheep");
// }
// if (noun = "goose"){
//   console.log(number + " " + "geese");
// }
// if (noun = "fish"){
//   console.log(number + " " + "fish");
// }
// else {
