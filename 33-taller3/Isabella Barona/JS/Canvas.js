//canvas lluvia
var RAIN = [];

function setup() {
  
    var canvas = createCanvas(windowWidth, 160);
    canvas.parent('Canvas');
  for (var i = 0; i < 25; i++) {
    RAIN[i] = new Rain;
 }
}

function draw() {
  background(66, 85, 170);
  for (var i = 0; i < 25; i++) {
    RAIN[i].show();
    RAIN[i].update();
  }
}

class Rain {
    constructor(){
      this.x = random (0, width);
      this.y = random (0, -height);
    }
    
    show(){
      noStroke();
      fill (255);
      ellipse(this.x, this.y, random (2, 5), random (10, 20));
    }
    
    update(){
      this.y = this.y + 7;
      
      if (this.y > height){
        this.y = random (0, -height);
      }
    }
  }