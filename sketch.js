var xFolha,yFolha,factorCrescimento,  ponto1, ponto2;
var cores=[];

//function preload() {img = loadImage("eva.png");  //Carrega a imagem}

function setup() 
{
  frameRate(10);//velocidade dos objectos 
  createCanvas (596, 842);
  background(125);

  cores[0]=color(255,0,0);
  cores[1]=color(0,255,0);
  cores[2]=color(0,0,255);

  xFolha=596;//Configuração para o quad
  yFolha=842;//Configuração para o quad
  factorCrescimento=2;
  ponto1=60;
  ponto2=45;
}



function draw() {
  fill(0,random(100 | 200),random(255 | 200),10);
  rect(0,0,596,842);

  noFill();
  strokeWeight(13);
  stroke(39,82,89);
  rect(4,4, 420, 370);
  rect(4,190, 584, 645);
  
  if (frameCount%1 === 0) background (80, 42, 41, 20);

  xFolha = random(width);//X aleatorio onde aparece o losango
  yFolha = random(height);//X aleatorio onde aparece o losango


  if (ponto1>200 || ponto1<40) factorCrescimento*=-1; // Permite os losangos irem do tamanho 40 ao 200 e assim estar sempre animado
   
  ponto1+=factorCrescimento
  ponto2+=factorCrescimento
  

  strokeWeight(4);
  stroke(255,255,255,random(255|100));
  fill(255,255,255,20)
  quad (xFolha, yFolha-ponto1,  xFolha-ponto2, yFolha,  xFolha ,yFolha+ponto1,  xFolha+ponto2, yFolha);// Configuração do losango
}