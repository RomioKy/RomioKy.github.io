var t, n, numLinhas, numColunas, escolhaForma;

function preload() {
  meuSVG = loadImage ('meuVector.svg')
  meuSVG = loadImage ('meuVector.svg')
}

function setup() 
{
  createCanvas (596, 842, SVG);
  frameRate(1)
}

function draw() 
{
  background(255);

  t=width/10;
  numLinhas  = height/t;
  numColunas = width/t;

  noStroke();
  fill(0);
  ellipseMode(CORNER);

  for(var x=0; x<numColunas; x++)
  {
    for(var y=0; y<numLinhas; y++)
    {
      escolhaForma = int(random(1,3));

      if(escolhaForma === 1){
        ellipse(x*t, y*t, t, t);
      }

      if(escolhaForma === 2){
        rect (x*t, y*t, t, t);
      }         
    }
  }
}

function keyPressed() {
  if (key==="A")
  {
    noLoop();
    save("menuProjeto.svg");
  }
}
