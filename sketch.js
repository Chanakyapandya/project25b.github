
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var dustbinimg;

function preload()
{
	dustbinimg = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//dustbin = createSprite(650,430,30,30);
	

	//Create the Bodies Here.

	paper = new Paper(70,420,40);
	ground = new Ground(400,480,800,15);
	dustbin1 = new Dustbin(780,430,15,100);
	dustbin2 = new Dustbin(610,430,15,88);
	dustbin3 = new Dustbin(695,465,160,15);


	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background("white");

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(dustbinimg,600,270,200,200);
  paper.display();
 
 
  drawSprites();
 
}


function keyPressed(){

if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position,{x : 60, y : -85});


}

}
