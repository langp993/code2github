// function Bubble(x, y) {
//   this.x = x;
//   this.y = y;
//   this.r = 40;
//   this.col = color(255);
//   this.vx = random(-2,2);
//   this.vy = random(-2,2);

//   // this.changeColor = function() {
//   //   this.col = color(random(255), random(255), random(255));
//   // };

//   this.display = function() {
//     stroke(255);
//     fill(this.col);
//     ellipse(this.x, this.y, this.r * 2, this.r * 2);
//     this.col = 255;
//   };

//   this.intersects = function(other) {
//     var d = dist(this.x, this.y, other.x, other.y);
//     if (d < this.r + other.r) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   this.update = function() {

//     this.x += this.vx;
//     this.y += this.vy;

//     if (this.x > width) {
//       this.x = 0;
//     } else if (this.x < 0) {
//       this.x = width;
//     }

//     if (this.y > height) {
//       this.y = 0;
//     } else if (this.y < 0) {
//       this.y = height;
//     }
//   };
// }

// var bubbles = [];
// var displayEllipses = true;

// function setup() {
//   createCanvas(600, 400);
//   for (var i = 0; i < 20; i++) {
//     bubbles[i] = new Bubble(random(width),random(height));
//   }
// }

// function draw() {
//   background(0);

//   for (var i = 0; i < bubbles.length; i++) {
//     bubbles[i].update();
//     if (displayEllipses) {
//       bubbles[i].display();
//     }
//     for (var j = i+1; j < bubbles.length; j++) {
//       if (bubbles[i].intersects(bubbles[j])) {
//         bubbles[i].changeColor();
//         bubbles[j].changeColor();
//         stroke(255);
//         line(bubbles[i].x, bubbles[i].y, bubbles[j].x, bubbles[j].y);
//       }
//     }
//   }
// }

// function mousePressed() {
//   displayEllipses = !displayEllipses;
// }

// var sizeslider;
// var canvas;
// var sizeslide;

// function setup(){
// 	canvas = createCanvas(800,600);
// 	canvas.position(230, 100);
// 	background(0);
// 	sizeslider = createSlider(100, 250, 100);
//     sizeslider.position(210, 210);
  

// }

// function draw(){
// 	var val = sizeslider.value();
// 	fill(255,0,0);
// 	noStroke();
// 	ellipse(400, 300, val,val);
// 	console.log(sizeslider.value);

// 	}

var canvas;
var colorslide;
var strokeslide;
var sizeslide;
var movementslider;

function setup(){
	canvas = createCanvas(800, 600);
	canvas.position(230, 25);
	colorMode(HSB, 255);
	colorslide = createSlider (0, 255, 0);
	colorslide.position (265, 510);
	// strokeslide = createSlider (1, 20, 1);
	// strokeslide.position = (565, 630);
	sizeslide = createSlider (100, 400, 100);
	sizeslide.position (265, 550);

	movementslider = createSlider (100, 400, 100);
	movementslider.position (265, 450);
}
  	
function draw(){
	background(0,0,150);
	fill(colorslide.value(), 100, 255);
	noStroke();
	// strokeWeight(strokeslide.value());
	ellipse(width/2, height/2, 150, 150);
	ellipse(width/2, height/2, sizeslide.value(), sizeslide.value());

	ellipse(width/2, height/4, 50, 50);

	// strokeWeight(strokeslide.value());

	
	// fill(colorslide.value(), 255, 150);
	// ellipse(width/2, height/2, sizeslide.value(), sizeslide.value());
	// fill(colorslide.value(), 255, 200);
	// ellipse(width/4+width/2, height/2, sizeslide.value(), sizeslide.value());
}

// }



