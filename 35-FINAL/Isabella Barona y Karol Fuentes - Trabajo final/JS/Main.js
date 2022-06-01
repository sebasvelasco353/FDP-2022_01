//Coordenadas minimas y maximas

var minh = 465;
var maxh = 60;
var minw = 0;
var maxw = 960;

//Carga de imagenes

let platform;
let platform_pasto;
let isla;
let player;
let planeta;
let fondo;

function preload (){
  player = loadImage('./Images/Personaje.png');
  platform_pasto = loadImage('./Images/Cuadrado_Pasto.png');
  platform = loadImage ('./Images/Cuadrado.png');
  isla = loadImage ('./Images/Isla.png');
  planeta = loadImage ('./Images/Planeta.png');
  fondo = loadImage('./images/Fondo.png');
}

//Setup

function setup() {
  createCanvas(960, 540);
  rectMode(CENTER);
  imageMode(CENTER);
  Plat = new Platformas();
  Door = new Puerta ();
  Grab = new Item();
}

//Juego

function draw() {
  keyPressed ();
  gravity ();
  game ();
}

function game (){
  image (fondo, width/2, height/2, width, height);

  Door.drawDoor();
  Grab.Coin();

  image (player, Playerx, Playery, PlayerWidth, PlayerHeight);

  Plat.paint();
  Plat.collision ();

  Door.end();
  Grab.Inventario();
}