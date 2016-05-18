/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
function celsiusToFahrenheit(tempC){
  var tempF = (tempC*9)/5+32;
  console.log(tempC + "°C is "+ tempF + "°F ");
}

function fahrenheitToCelsius(tempF1){
  var tempC1 = ((tempF1-32)*5)/9;
  console.log(tempF1 + "°F is "+ tempC1 + "°C ");
}

celsiusToFahrenheit(28);
fahrenheitToCelsius(80);
