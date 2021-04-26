function setup() {
  createCanvas(800,400);
 fixed = createSprite(400, 200, 50, 50);
 moving = createSprite(400,50,70,30);
 fixed.shapeColor=("red")
 moving.shapeColor="yellow"

 fixed.velocityY=-1
 moving.velocityY=1
}

function draw() {
  background(0); 
  
  bouncing(fixed,moving);
 
  drawSprites();
}

