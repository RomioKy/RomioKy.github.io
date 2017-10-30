var img;

function preload () {
  img = loadImage ("images/eva.jpg");
}

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  
}


function draw() 
{
  image(img, 0, 0);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
