var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2= loadImage("treasure.jpg")
  
}

function setup() {
  createCanvas(1535,790);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(25);
  fill("white");
  text("Score: " + score, 1400, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",500, 395);
  }

  drawSprites()
}