/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...

var movie = [
  { title : "This is 40",
  duration : "140",
  stars : "Paul Rudd and Leslie Mann"},

  { title : "The final cut",
  duration : "120",
  stars : "Robin Williams"},

  { title : "Puff the Magic Dragon",
  duration : "30",
  stars : "Puff, Jackie, Living Sneezes"}
];

function movies() {
for (var i = 0 ; i < movie.length; i++) {
console.log(movie.title + " lasts for " + movie.duration + ". Stars:" + movie.stars);
}
}

movies();
