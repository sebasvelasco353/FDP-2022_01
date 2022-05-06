class Asteroid extends Star {
    constructor(speed, position, size, direction,side) {
        super(speed, position, size, direction);
        this.side= -1;
        this.position[0] = windowWidth;
    }
    draw() {
        ellipse(this.position[0], this.position[1], this.size);
    }

    draw2() {
        rect(this.position[0], this.position[1], this.size);
    }

    move() {

        this.position[0] = this.position[0] + this.speed * this.side;
    
        if(this.position[0] < windowWidth/2) {
            this.draw();
        } else {
            this.draw2();
        }
  
      if(this.position[0] < 0){
        this.side = 1;
      }

      if(this.position[0] > windowWidth){
          this.side = -1;
      }

        /*
        if (this.position[0]>windowWidth/2) {
            this.draw2(); 
        } else {
            this.draw();}
        
        

      if(this.position[0] >= windowWidth){
        this.side = -1;
      }

      if(this.position[0] < 0){
          this.side = 1;
      }
        
        /*
        this.draw();
        if (this.position<windowWidth/2) {
            //un setter que lo convierta en una estrella
        } else {
            
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
        }*/
    }
}