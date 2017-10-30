var frase;

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  frase = "Olá Mundo!";
}


function draw() 
{
  background (255,15);
  textStyle(ITALIC);
  textAlign (CENTER, CENTER);
  textFont("Nova Flat");
  textSize (50);
  textLeading(200); //Espaçamento entre linhas
  text (frase,random(width), random (height));
  fill(random(255),random(0),random(0));

}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
