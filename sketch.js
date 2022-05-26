const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;

var backgroundImg;
var ground;
var snowFlake;
var boy;

function preload() {
boyImg = loadImage("boy.png");
backgroundImg = loadImage("snow1.jpg");
}


function setup() {
  createCanvas(1365,625);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(670, 620, 1400, 30);
  snowFlake = new Snowflake(1000, 330, 50, 50);
  boy = createSprite(700, 660, 20, 5);
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);

  boy.addImage(boyImg)
  ground.display();
  snowFlake.display();
  boy.display();

  drawSprites();
}

function keyPressed(){
  if(keyPressed==="RIGHT_ARROW"){
    boy.x = boy.x+20;
  }
}

function keyPressed(){
  if(keyPressed==="LEFT_ARROW"){
    boy.x = boy.x-20;
  }
}
