
var x,y;
var cores=[];
function setup() 
{
  createCanvas (windowWidth, windowHeight);
  frameRate(1)

  cores[0]=color(255,0,0);
  cores[1]=color(0,255,0);
  cores[2]=color(0,0,255);
}



function draw() 
{
  background (255);
  
  for (var i=0; i<100; i++)
  {
    fill( cores[int(0, 2)]);
  
    quadAleatorio(random(width), random(height), random(20,100), random(15, 75));
  }
  
  function quadAleatorio (x_,y_,l_,a_)
  {
    var x=x_;
    var y=y_;
    var l=l_;
    var a=a_;
    var d=30; //Muda a distancia entre cada lado dos losangos.
  
    var diagonal = random(-1,1);
  
    var x1=x-l/2;
    var y1=(y-a/2)+(d*diagonal);
    var x2=x+l/2;
    var y2=(y-a/2)+((d*diagonal)*-1);
    var x3=x+l/2;
    var y3=(y+a/2)+((d*diagonal)*-1);
    var x4=x-l/2;
    var y4=(y+a/2)+(d*diagonal);

    quad(x1,y1,x2,y2,x3,y3,x4,y4);
  }
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
