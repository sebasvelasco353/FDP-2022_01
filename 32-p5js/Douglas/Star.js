class Star {
    constructor(speed, position, size, direction, side) {
        this.speed = speed;
        this.position = position;
        this.size = size;
        this.direction = direction;
        this.side = 1;
    }

    draw() {
        ellipse(this.position[0], this.position[1], this.size);
    }
    draw2() {
        rect(this.position[0], this.position[1], this.size);
    }
    move(){
        if (this.position[0]>windowWidth/2) {
            this.draw2(); 
        } else {
            this.draw();}
        
        this.position[0] = this.position[0] + this.speed * this.side;

      if(this.position[0] > windowWidth){
        this.side = -1;
      }

      if(this.position[0] < 0){
          this.side = 1;
      }
    }
    /*
    draw() {
        ellipse(this.position[0], this.position[1], this.size);
    }
    draw2() {
        rect(this.position[0], this.position[1], this.size);
    }
    move() {
        
        if (this.position>windowWidth/2) { 
           this.draw2();
        } else {
            this.draw();
        }
        if (this.direction) {
            if (this.position[0] < windowWidth) {
                this.position[0] += this.speed;
            } else {
                this.position[0] = 0;
            }
        } else {
            if (this.position[0] > 0) {
                this.position[0] -= this.speed;
            } else {
                this.position[0] = windowWidth;
            }
        }
        //this.draw();
    }*/
}