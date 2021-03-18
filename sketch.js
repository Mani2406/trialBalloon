
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var balloon1;
var database;

function preload()
{
	backgroundImg = loadImage("city.jpg");
}


function setup() {
	createCanvas(1200, 800);
	database = firebase.database();

	engine = Engine.create();
	world = engine.world;

 balloon1 = new Balloon(200,150,200,200); 	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  balloon1.display();
 
  if(keyDown(LEFT_ARROW)) {
	  balloon1.x = balloon1.x - 10;
  }
  

  drawSprites();
 
}




