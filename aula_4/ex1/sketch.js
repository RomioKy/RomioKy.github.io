
var x, y, t, vX, vY;
// t - tamanho
// v - velocidade


// x+=v; = x=v*-1;

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  t = 100;
  vX = 40;
  vY = vX;
}



function draw() 
{
  background (125, 50);

  if (x+t/2>width || x-t/2<0 )
  {
    vX*=-1;
    fill (random(255), random(255), random(255));
  }

  if (y+t/2>height || y-t/2<0 )
  {
    vY*=-1;
    fill (random(255), random(255), random(255));
  }


  x+=vX;
  y+=vY;
  ellipse (x, y, t, t);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
