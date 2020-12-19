
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall, wall2, wall3, ball, wall4, bin, binImage;

function preload()
{
	binImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
wall=createSprite(650,600,100,20)
wall2=createSprite(610,560,20,100)
wall3=createSprite(690,560,20,100)
ball=createSprite(100,560,20,20)
wall4=createSprite(650,560,100,20)
bin=createSprite(650,560,100,20)
bin.addImage(binImage)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
if(keyDown(UP_ARROW)){
	ball.velocityX=5
	ball.velocityY=-5
}
if(ball.x===390){
	ball.velocityX=5
	ball.velocityY=5
}
if(ball.isTouching(wall4)){
	ball.velocityY=0
	ball.velocityX=0
}
  wall4.visible=false
  drawSprites();
 
}



