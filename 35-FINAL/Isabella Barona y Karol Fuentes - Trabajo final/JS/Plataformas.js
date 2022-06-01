//Coordenadas de plataformas

var b1x = 60;
var b1y = 350;

var b2x = 300;
var b2y = 440;

var b3x = 500;
var b3y = 340;

var b4x = 820;
var b4y = 250;
var b4w = 290;

//Clase plataformas (y colision)

class Platformas {
  constructor(){
    this.width = 120;
    this.height = 60;
  };
  paint(){
    image (platform, width/2, 540, width, 50);
    image (platform_pasto, b1x, b1y, this.width, this.height);
    image (isla, b2x, b2y, this.width, this.height);
    image (isla, b3x, b3y, this.width, this.height);
    image (platform_pasto, b4x, b4y, b4w, this.height);
  };
  collision (){
    if ( (Playerx >= b1x - this.width/2 && Playerx <= b1x + this.width/2 && Playery + PlayerHeight/2 >= b1y - this.height/2 && Playery + PlayerHeight/2 <= b1y - this.height/2 + 5 && jump == false)  ||  (Playerx >= b2x - this.width/2 && Playerx <= b2x + this.width/2 && Playery + PlayerHeight/2 >= b2y - this.height/2 && Playery + PlayerHeight/2 <= b2y - this.height/2 + 5 && jump == false)  ||  (Playerx >= b3x - this.width/2 && Playerx <= b3x + this.width/2 && Playery + PlayerHeight/2 >= b3y - this.height/2 && Playery + PlayerHeight/2 <= b3y - this.height/2 + 5 && jump == false)  ||  (Playerx >= b4x - b4w/2 && Playerx <= b4x + b4w/2 && Playery + PlayerHeight/2 >= b4y - this.height/2 && Playery + PlayerHeight/2 <= b4y - this.height/2 + 5 && jump == false) ){
      Playery = Playery;
      velocity = 0;
      jumpcounter = 0;
    };
  };
};