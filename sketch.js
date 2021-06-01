const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var ball,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options ={
        restitution : 1.5
    }

    var ground_options ={
        isStatic : true
    }

   ball= Bodies.circle(200,20,40,ball_options);
    World.add(world,ball);

    ground= Bodies.rectangle(200,380,400,40,ground_options);
    World.add(world,ground);

}

function draw(){
    background("cyan");

    Engine.update(engine);

    fill("red")
    stroke("brown");
    strokeWeight(3);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,40);

    fill("green")
    stroke("olive");
    strokeWeight(3);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,40);
}
