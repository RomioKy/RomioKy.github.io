var img;

function preload () {
  img = loadImage ("images/eva.jpg");

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  image(img, 0, 0);
}


function draw() 
{
  
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
