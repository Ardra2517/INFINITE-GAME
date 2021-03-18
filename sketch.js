var runner,runnerImage;

function preload(){
runnerImage=loadImage("Mario game-Images.png")
}

function setup() {
  createCanvas(800,400);

  runner = createSprite(50,180,20,50);
  runner.addImage("mario",runnerImage);
  runner.scale=0.2;
  ground = createSprite(200,180,400,20);

}

function draw() {
  background(255,255,255);  

  if(keyDown("space") && runner.y >= 159) {
    runner.velocityY = -12;
  }

  runner.velocityY = runner.velocityY + 0.8

  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  runner.collide(ground);

  drawSprites();
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle = Math.round(random(80,120));
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = runner.depth;
    runner.depth = runner.depth + 1;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
  
}