var xFolha,yFolha,factorCrescimento,t;

function preload() {
}

function setup() 
{
  frameRate(30);
  createCanvas (596, 842);
  background(125);


  xFolha=596;
  yFolha=842;
  factorCrescimento=2;
  t=30;
}


function draw() {
  strokeWeight(15);
  //rect(0, 0, 420, 370);
 // rect(0, 190, 596, 652);
  
 if (frameCount%1 === 0) background (125, 20);

  xFolha = random(width);
  yFolha = random(height);


  if (xFolha>596 || yFolha<0) factorCrescimento*=-1;  
  xFolha+=factorCrescimento
  

  strokeWeight(2);
  noFill();
  quad (xFolha, yFolha-60,  xFolha-45, yFolha,  xFolha ,yFolha+60,  xFolha+45, yFolha);
}