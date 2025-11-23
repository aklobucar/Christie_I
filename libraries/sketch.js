let backgroundColor;

// Function that allows me to define a color for the sketch background and manipulate it.

let myFont;

function preload() {
  // Loads my custom font before the sketch begins.
  myFont = loadFont('Disclaimer-Classic.otf');
}

var x = 200;
var y = 200;

function setup() {
  createCanvas(750, 750);
  background(0);
  backgroundColor = color(245, 10, 90);
  
  // Defining the background color function.
  
}

function draw() {
  strokeWeight(5);
  square(x,y, 75, 5);
  fill(255);
  
  if (x >= 400){
    x = 0; 
  
  // Creates the square in the sketch.
    
  }
}

function keyPressed() {
  if (key === 'w') {
    y = y - 50;
    stroke(mouseY,mouseX,random(255));
    fill(mouseX,mouseY,random(255));
    
  } else if (key === 's') {
    y = y + 50;
    stroke(mouseY,mouseX,random(255));
    fill(mouseX,mouseY,random(255));
  }
  if (key === 'a') {
    x = x - 50;
    stroke(mouseY,mouseX,random(255));
    fill(mouseX,mouseY,random(255));
    
  } else if (key === 'd') {
    x = x + 50;
    stroke(mouseY,mouseX,random(255));
    fill(mouseX,mouseY,random(255));
  }
  
  // Allows the user to manipulate the square's direction of movement with W, A, S, and D. Also has an embedded function that causes its color to slightly change each time W, A, S, or D is pressed.
  
}

function mouseDragged() {
  stroke(mouseY,mouseX,random(255));
  fill(mouseX,mouseY,random(255));
  
  // Changes the range of color the square can be depending on where the mouse is vertically and horizontally on the sketch.
  
}
  
function mousePressed() {
  background(backgroundColor)
  backgroundColor = color(random(255), random(255), random(255) );
  
  // Changes the background color at random each time the user's mouse or touchpad is pressed.
  
  textSize(250);
  fill(mouseX,mouseY,random(255));
  stroke(random(255));
  textFont(myFont);
  text('You Are Dreaming', 250, 450);
  
  // The default text on the screen, which changes in fill and stroke color at random when the mouse or touchpad is pressed. The font used is the custom one, named Disclaimer, that was preloaded at the start.
  
  if (key === 's') {
  text('Do Not Fall', 250, 150);
  } else if (key === 'w') {
  text('Keep Rising', 250, 750);
    
  // Separate texts that appear when the user goes down with the square with the 's' key, or up with the square with the 'w' key.
    
} 
}