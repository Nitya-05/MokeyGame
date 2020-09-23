//storing project
var monkey , monkey_running , ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  //loading images
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  var monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.collide("ground");
  monkey.scale=0.1;
  
  var ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  var banana=createSprite(200,100,20,20);
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  var survivalTime=0;
}

function draw() {
  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time"+ survivalTime,150,50);
  
  if (keyDown("space")){
    monkey.velocityY=3;  
      }
  
  banana=Math.round(random(120,200));
  Obstacle();
  Banana();
 drawSprites();
}

function  Obstacle(){
  if (frameCount % 300 === 0){
   //creating obstacle
   var obstacle = createSprite(400,220,20,20);
    obstacle.addImage("obstacle", obstacleImage);
   obstacle.velocityX = -6;
    obstacle.scale=0.1;
    obstacle.lifeTime=200;
    
  }
  obstacleGroup.add(obstacle);
  
}

function Banana(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,215,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
}
  if(monkey.isTouching(banana)){
     banana.destroyEach();
     }
bananaGroup.add(banana);
}

