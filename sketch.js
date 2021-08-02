
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, paper, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//dustbin1 = new Dustbin(600,650,5,75);
	//dustbin2 = new Dustbin(700,650,5,75);
	dustbin1 = new Dustbin(620,610,75,10,90);
	dustbin2 = new Dustbin(720,610,75,10,90);
	var w = 100;
	var l = 10;
	dustbin3 = new Dustbin(650,630,w,l);
	dustbin4 = new Dustbin(690,630,w,l);
	
	paper = new Paper(100,600,10);
	//paper = new Paper(100,60,10);
	ground = new Ground(200,690,10,2000,90)
	Engine.run(engine);
	
}
//function keyPressed(){
	//if(keyCode===UP_ARROW){
		//Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:350});
		//paper.velocityY=2;
	//}
//}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display();
  //paper.display();
  
  ground.display();
  fill("white")
  ellipseMode(RADIUS);
  var cir = ellipse(100,600,20,20)
  drawSprites();
  //keyPressed();
  if(keyCode===UP_ARROW){
	//paper.postion.x = 670;
	//paper.position.y = 610;
	//paper.visible = false;
	//paper = new Paper(670,610,10);
	fill("black")
	ellipse(100,600,20,20)
	fill("white")
	ellipseMode(RADIUS);
    ellipse(670,610,20,20)
}
	
}





