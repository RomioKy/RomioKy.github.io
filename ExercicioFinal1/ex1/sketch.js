var img;

function preload () {
  img = loadImage ("images/eva.jpg");
}

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  background(0,)
;}


function draw() 
{
  //image(img, 0, 0);
  float x = random(width);
  float y = random(height);

  ellipse (x, y, 16, 16);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
