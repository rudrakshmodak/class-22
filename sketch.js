
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine,object,ground;
function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var object_options={
    restitution:0.5
    }
  object=Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,10,ground_options);
  World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x, ground.position.y,400,10);
}  