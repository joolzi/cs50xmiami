/*
The Recipe Card

Never forget another recipe!

- Create an object to hold information on your favorite recipe. It should have
  properties for title (a string), servings (a number),
  and ingredients (an array of strings).

- On separate lines (one console.log statement for each), log the recipe
  information so it looks like:
    Mole
    Serves: 2
    Ingredients:
    cinnamon
    cumin
    cocoa
*/

// write your solution here...
function Recipe() {

var recipe = {
  Title:"Julies's Yummy Mole",
  Serves:"2",
  ingredients: ["cinnamon", "cumin","cocoa"]
};
  console.log(recipe.Title);
  console.log("Serves: " + recipe.Serves);
  console.log("Ingredients: " );
for ( var i = 0; i < 3; i++){
  console.log(recipe.ingredients[i])
}
}
Recipe();
