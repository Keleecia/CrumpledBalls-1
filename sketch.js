
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;

block1;
block2;
block3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	 
	paper = new Paper(200,200,30);
	ground = new Bin(400,700,800,10);
	block1 = new Bin(600,660,150,20);
	block2 = new Bin(665,600,20,110);
	block3 = new Bin(537,600,20,120);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();

  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-180})
	}
}


