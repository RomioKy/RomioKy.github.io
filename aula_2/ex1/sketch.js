

function setup()
{
  createCanvas (windowWidth, windowHeight);

  colorMode (HSB, 360, 100, 100, 100); //Muda o modo de cor para Hue Saturation Brightness

  //frameRate (1); //Definição do FrameRate, mais tarde foi apagada na aula
}

//Notas
function draw() 
{
  frameRate ( int(random(1 ,60)));//Randomiza o framerate
  print("oi,texto!!!");//Mensagem para a consola

  background( random(0, 255), random(0, 255), random(0, 255) ); //Cores que Variam como no PS de 0 a 255
  fill (255); //Core de preenchimento do objeto
  stroke (255, 0, 0);
  strokeWeight (8);
  rectMode (CENTER) //De onnde o rectangulo começa a ser "Desenhado "
  noFill(); //Cancelar o Fill predefinido antes
  rect (width/2, height/2, 250, 250);//Local Onde o ponto de inicio de criação do rectangulo encontra-se

  fill (0, 255, 0);
  noFill();
  ellipseMode (CORNER); 
  ellipse (width/2, height/2, 200, 200);

  line(width/2, 0, width/2, height);

  point(20, 20);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
