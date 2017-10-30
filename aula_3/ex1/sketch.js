

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100); //HSB modo de cor, HUE, Saturation, Brightness, Allpha.
  background(0, 0, 100); //Cria um background para eliminar as copias que o objeto faz quando segue o rato.
  
}


function draw() 
{
  stroke( map ( mouseX, 0, width, 0, 360), 100, 100 );
  strokeWeight( abs(mouseX-pmouseX) + abs(mouseY-pmouseY) );
  line( mouseX, mouseY, pmouseX, pmouseY); //mouseX e mouseY, vai buscar a posição do rato e atribui ao objeto
}

function mousePressed()
{
  if (mouseButton === LEFT )
  {
    background (0, 0, 100);
  }
}

function keyPressed()
{
  if (key === 'C' || key === 'c' || keyCode === ENTER ) // As dua linhas verticais "||"" singificam "ou".
  {
    background (0, 0, 100);
  }
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
