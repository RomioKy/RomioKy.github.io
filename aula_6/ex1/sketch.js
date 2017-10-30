var x1, y1, x2, y2,espacamentoHorizontal, numLinhas, linhaActual;

function setup() 
{
  createCanvas (windowWidth, windowHeight); 

  
  t = 20;
  numLinhas = 5;
}


function draw() 
{
  background(255);
  espacamentoHorizontal = width/numLinhas;
  linhaActual = 1;
/*
  while(linhaActual<numLinhas)
  {
    y1 = height/2 - t/2;
    y2 = height/2 + t/2;
  

    x1 = espacamentoHorizontal*linhaActual;
    x2 = x1;
  
    strokeWeight(3);
    line(x1,y1,x2,y2)

    linhaActual++;
  }
*/

  x1=0;
  while(x1<width)
  {
    y1 = height/2 - t/2;
    y2 = height/2 + t/2;
  

    x1 += 10;
    x2 = x1;
  
    line(x1,y1,x2,y2);
  }
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
