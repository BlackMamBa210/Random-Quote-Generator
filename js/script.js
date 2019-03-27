//Store at least 5 quotes into a variable using an array.
var quotes = [
  {
      quote: "Don't cry because it's over, smile because it happened.",
      author: "Dr.Seuss",
      citation: "https://www.goodreads.com/quotes/tag/optimism",
      year: "1970"
  },
  {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
      citation: "https://www.goodreads.com/quotes/tag/optimism",
      year: "2007"
  },
  {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
      citation: "https://www.goodreads.com/quotes/tag/optimism",
      year: "1962"
  },
  {
      quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      author: "Bernard M. Baruch",
      citation: "https://www.goodreads.com/quotes/tag/optimism",
      year: "2001"
  },
  {
      quote: "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend.",
      author: "Albert Camus",
      citation: "https://www.goodreads.com/quotes/tag/optimism",
      year: "1990"
  }
]

//Test the array by logging it to the console. 
//console.log(quotes)

//Create a variable that will store a random number and return a random quote from the array.
function getRandomQuote() {
  var random_numer = Math.floor(Math.random() * quotes.length);
  return quotes[random_numer];
}

//Create a test by printing the result to the console. 
//console.log(getRandomQuote())


//This function will pick a quote at random.
function printQuote() {
  var randomQuote = getRandomQuote();
  var HTML = '';
  var Div;

  HTML += '<p class="quote">' + randomQuote.quote + '</p>';

//Create a test by printing the result to the console.
//console.log(randomQuote.quote)

//This is statement will print the author of the quote.
  if (randomQuote.author) {
    HTML += '<span class="author">' + randomQuote.author + '</span>';
    HTML += '<span class="citation">' + randomQuote.citation + '</span>';
    HTML += '<span class="year">' + randomQuote.year + '</span>';
  }

  HTML += '</p>';

  Div = document.getElementById('quote-box');
  Div.innerHTML = HTML;

  randomColor();
  
}

//This function will randomly select the background colors of the quotes.

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
  document.body.style.background = bgColor;
}

//This function will change the quote and background every 5 seconds.
var myVar = setInterval(myTimer, 5000);

function myTimer() {
  randomColor();
  printQuote();
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
