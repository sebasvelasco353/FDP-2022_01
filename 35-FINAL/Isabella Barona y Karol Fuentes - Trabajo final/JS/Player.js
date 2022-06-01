//Medidas y posicion player

var Playerx = 50;
var Playery = 50;
var PlayerWidth = 50;
var PlayerHeight = 100;


//Variables para salto y gravedad

var jump = false;
var direction = 1;
var velocity = 3;
var jumppower = 13;
var falling = 5;
var jumpcounter = 0;

//Movimiento con teclas

function keyPressed (){
   if (keyIsDown(LEFT_ARROW) && (Playerx > 40)) {
    Playerx -= 5;
  };
  if (keyIsDown(RIGHT_ARROW) && (Playerx < 920)) {
    Playerx += 5;
  };
  if (keyIsDown(UP_ARROW)) {
    jump = true;
  }
  else{
    jump = false;
  }
};

//Salto / gravedad

function gravity (){
  if (Playery >= minh && jump == false){
    Playery = Playery;
    jumpcounter = 0;
  }
  else{
    Playery = Playery + (direction*velocity);
  }
  
  if (jump == true){
    if (Playery <= maxh || jumpcounter >= jumppower){
      if (Playery >= minh){
        Playery = minh;
      }
      else{
       velocity = falling;   
      }
    }
    else {
      velocity = -jumppower;
      jumpcounter = jumpcounter + 1;
    }
  }
  else {
    velocity = falling;
  }
};