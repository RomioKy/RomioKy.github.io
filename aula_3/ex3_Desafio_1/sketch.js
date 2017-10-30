function setup() 
{
  createCanvas (windowWidth, windowHeight);
}


function draw() 
{  
  x = width;
  y = height;
  
    if ( mouseX>0 && mouseX<x/2 &&
         mouseY>0 && mouseY<y/2 && mouseIsPressed === true ) 
  {
    fill (80, 80, 80);
  }
  else
  {
    fill (255, 255, 255);
  }
rect (0, 0, x/2, y/2);

    if ( mouseX>x/2 && mouseX<x &&
         mouseY>0 && mouseY<y/2 && mouseIsPressed === true ) 
  {
    fill (80, 80, 80);
  }
  else
  {
    fill (255, 255, 255);
  }
rect (width/2, 0, x/2, y/2);

    if ( mouseX>0 && mouseX<x/2 &&
         mouseY>y/2 && mouseY<y && mouseIsPressed === true ) 
  {
  fill (80, 80, 80);
  }
  else
  {
  fill (255, 255, 255);
  }
rect (0, height/2, x/2, y/2);

  if ( mouseX>x/2 && mouseX<x &&
       mouseY>y/2 && mouseY<y && mouseIsPressed === true ) 
  {
  fill (80, 80, 80);
  }
  else
  {
  fill (255, 255, 255);
  }
rect (width/2, height/2, x/2, y/2);
  }


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
