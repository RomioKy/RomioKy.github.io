var img;

function preload() {
  img = loadImage("images/eva.jpg");
}

function setup() {
  createCanvas(720, 400);
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, 10, 10);
}