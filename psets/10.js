/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune() {
  var kids = ["3", "8", "4"];
  var name = ["Felix", "Nathan", "Myles"];
  var location = ["Paris", "Sukhothai", "Botswana"];
  var job =  ["Programmer", "Uber Driver", "Painter"];

  var randomkids = kids[Math.floor(Math.random()*kids.length)];
  var randomname = name[Math.floor(Math.random()*name.length)];
  var randomlocation = location[Math.floor(Math.random()*location.length)];
  var randomjob = job[Math.floor(Math.random()*job.length)];

  console.log("You will be a " +randomjob+ " in " +randomlocation+ ", and married to " +randomname+ " with " +randomkids+ " kids");
}

tellFortune();
