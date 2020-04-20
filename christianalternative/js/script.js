// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//variables declarations
var randomObjects;
var message = ''; //<==empty string
var quotes;
var red;
var green;
var blue;
var quotes2 = []; //<==empty array

//a function to print the message in an attachable HTML element.
function print(message) {
  var outputDiv = document.getElementById("quote-box");
  outputDiv.innerHTML = message;
}

//a function which selects a random number through the 255 rgb + 1 colors.
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

//Function to genereate random rgb color value
function randomColor() {
  var color;
  red = randomRGB();
  green = randomRGB();
  blue = randomRGB();
  color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return color;
}

//Function named getRandomQuote which selects a random object from quotes array and returns the randomly selected object, then we splice it, to don't repeat a random quote more than once until all quotes from the array have been displayed.
function getRandomQuote() {
  var quoteObject = Math.floor(Math.random() * quotes.length);
  var splicedQuote = quotes.splice(quoteObject, 1)[0];
  quotes2.push(splicedQuote);
	if (quotes.length === 0) {
		quotes = quotes2;
	}
  return splicedQuote;
}

// Function to build a string using the different properties of the quote object previously selected from the array and print it to the screen. 
function printQuote() {
  randomObjects = getRandomQuote();
  message = '<p class="quote">' + randomObjects.quote + '</p>'; 
  message += '<p class="source">' + randomObjects.source;
  if (randomObjects.cover !== undefined && randomObjects.spotify !== undefined) {
    message += '<table style="width:100%"><tr><th><img class="cover" src="' + randomObjects.cover + '"></th>'; 
    message += '<th align="center" valign="top"><iframe src="https://open.spotify.com/embed/album/' + randomObjects.spotify + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></th></table>' + '</p>';
  }
  print(message);
  document.getElementById('rgb').style.background = "black";
}
//Set an interval of each 10 seconds to execute our printQuote function
//setInterval(printQuote, 10000);