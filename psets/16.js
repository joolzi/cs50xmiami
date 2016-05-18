/*
The World Translator

Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.

Call that function for each of the supported languages
and log the result to make sure it works.
*/

// write your solution here...
function helloWorld(code) {
  switch (code){
  case "es":
    console.log("Hola, Mundo!");
    break;
  case "fr":
    console.log("Bonjour, Monde!");
    break;
  case "th":
    console.log("สวัสดีชาวโลก!");
    break;
  default:
  console.log("Hello, World");
  }
}

helloWorld("es");
helloWorld("th");
helloWorld("fr");
helloWorld("xx");
helloWorld("");
