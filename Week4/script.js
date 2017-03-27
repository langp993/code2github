

var quotes = ["this is number 1", "this is number 2", "this is number 3", "this is number 2", "this is number 2", "this is number 2", "This is the last Quote"];



function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quotesdisplay").innerHTML =        quotes[randomNumber];
}

