let ball;
function setup() 
{
  createCanvas(800, 800);
  ball = new Ball(100,100,20);
}

function draw () 
{
  background(55);
  ball.show();
  ball.move();
}