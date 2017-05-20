// var input;
// var button;
// var lexicon;

// function setup() {
// 	noCanvas();
// 	lexicon = new RiLexicon();
// 	input = createInput('It was a dark and stormy night.');
// 	button = createButton('submit');
// 	input.changed(processRita);
// 	button.mousePressed(processRita);
// 	input.size(300);

// }

// function processRita() {
// 	var s = input.value();
// 	var rs = new RiString(s);
// 	var words = rs.words();
// 	var pos = rs.pos();
// 	console.log(words);
// 	console.log(pos);

// 	var output = '';
// 	for (var i=0; i<words.length; i++) {
// 		if (/nn.*/.test(pos[i])) {
// 			output += lexicon.randomWord(pos[i]);
// 		} else {
// 			output += words[i];
// 		}
		
// 		output += " ";
// 	}

// 	createP(output);
// 	console.log(output)

// 	rm = new RiMarkov(3);
// 	rm.loadText();
// 	sentences = rm.generateSentences(10);
// 	for (int i = 0; i < sentences.length; i++) {
// 		println(sentences[i]);
// 	}
  
// }



// ---

var txt, markov, lines, x = 160, y = 240;

function preload() {
	txt = loadStrings("elephants.txt");
}

function setup() {
	createCanvas(500, 500);
	textFont('times', 16);
	textAlign(LEFT);
	console.log(txt);

	lines = ["click to (re)generate"];

	markov = new RiMarkov(4);


	markov.loadText(txt.join(' '));

	drawText();
}

function drawText() {
	background(250);
	text(lines.join(' '), x, y, 400, 400);
}

function mouseClicked() {

  x = y = 50;
  lines = markov.generateSentences(10);
  drawText();
}




// rm = new RiMarkov(3);
// 	rm.loadText();
// 	sentences = rm.generateSentences(10);
// 	for (int i = 0; i < sentences.length; i++) {
// 		println(sentences[i]);
// 	}
  
// }

// -----

// var txt = "This rainbox has a unicorn flying over it.";
// var order = 3;
// var ngrams = [];

// function setup() {
// 	noCanvas();

// 	var input = createInput ()

// 	for (var i=0; i <= txt.length - order; i++) {
// 		var grams = txt.substring(i, i + 3);
// 		ngrams.push(grams);
// 	}
// 	console.log(ngrams);
// }

// var textfield;
// var output;
// var submit;

// function setup() {
// 	noCanvas();
// 	textfield = select("#input");
// 	output = select("#output");
// 	submit = select("#submit");
// 	submit.mousePressed(newText);
// }

// function highlight() {
// 	// console.log('hover');
// 	console.log(this);
// 	this.html('rainbow');
// 	var c = color(random(255), random(255), random(255));
// 	this.style('background-color', c);
// }

// function newText() {
// 	var s = textfield.value();


// 	var words = s.split(/(\W+)/);
// 	for (var i=0; i < words.length; i++) {
// 		var span = createSpan(words[i]);
// 		span.parent(output);

// 		if (!/\W+/.test(words[i])) {
// 		// span.style('background-color', color(random(255),random(255),random(255)));
// 		span.mouseOver(highlight);
// 		}
		
// 	}

// 	console.log(words);
// 	// console.log(words);
// 	// createP(s);
// }





