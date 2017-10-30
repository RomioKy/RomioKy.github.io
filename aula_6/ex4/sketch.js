var t, n, numLinhas, numColunas;

function setup() 
{
  createCanvas (windowWidth, windowHeight); 
  n=50;
}

function draw() 
{
  t=width/n;
  numLinhas  = height/t;
  numColunas = width/t;

  for(var x=0; x<numColunas; x++)
  {
    for(var y=0; y<numLinhas; y++)
    {
      fill (random (255));
      noStroke();
      rect (x*t, y*t, t, t);
    }
  }
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
