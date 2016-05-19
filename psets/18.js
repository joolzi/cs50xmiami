/*
The even/odd reporter

- Write a for loop that will iterate from 0 to 20.
- For each iteration, it will check if the current number is even or odd,
  and report that to the screen (e.g. "2 is even").
*/

function evenodd() {
  for (var number = 0; number <= 20; number++) {
    if ((number % 2) == 0) {
      console.log( number + " is even");
    }
    else {
      console.log( number + " is odd!");
    }
  }
}

evenodd();
