function Ball(x, y, r)
{
  this.x = x;
  this.y = y;
  this.r = r;
  this.d = 2*r;
  this.xVelocity = -5;
  this.yVelocity = -4;

  
  this.show = function()
  {
    
    color(255);
    ellipse(this.x,this.y, this.d, this.d);
  }
  this.move = function()
  {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.bounce();
  }
  this.bounce = function(){
    if(this.x-this.r<=0||this.x+this.r>=width){
        this.xVelocity*=-1; 
        
    }
    if(this.y-this.r<=0||this.y+this.r>=height){
        this.yVelocity*=-1; 
    }
}
}