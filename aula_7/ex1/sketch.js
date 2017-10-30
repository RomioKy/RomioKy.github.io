var t, n, numLinhas, numColunas, escolhaForma;

function setup() {
  createCanvas (windowWidth, windowHeight); 
}

function keyPressed() {
  if (key===" ")
  {
    noLoop();
    save("menuProjeto.svg");
  }
}

function windowResized() {
  resizeCanvas (windowWidth, windowHeight);
}
