//Puerta

class Puerta {
  constructor() {
    this.extra = 60;
    this.position = [b4x + this.extra, b4y - this.extra];
  };
  drawDoor() {
    stroke(249, 195, 74);
    strokeWeight(7);
    fill(20, 20, 50);
    rect(this.position[0], this.position[1], 80, 175, 40);
  };
  end() {
    if (Playerx == this.position[0] && Playery <= this.position[1]) {
      swal({
        title: "Good job!",
        text: "Level finished!",
        buttons: {
          confirm : {text:'Play again',className:'sweet-warning'},}
      });
      Playerx = 50;
      Playery = 50;
      console.clear();
    };
  };
};

//Item planeta (y arreglo en console log)

class Item {
  constructor() {
    this.position = [b4x, minh];
  }
  Coin() {
    image (planeta, this.position[0], this.position[1]);
  };
  Inventario() {
    if (Playerx == this.position[0] && Playery + PlayerHeight/2 >= this.position[1]) {
      swal({
        title: "You discovered a new planet!",
        text: "Check the console to see all the planets you've found",
        buttons: {
          confirm : {text:'Ok!',className:'sweet-warning'},}
      });
      Playerx -= 20;
      imprimir();
    }; 
  };
};