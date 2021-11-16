const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var bottom;
var left,right,top_wall;
var ball;
var btn1,btn2;

// function preload(){
//   push = loadImage("push.png")
//   right = loadImage("right.png")
//   up = loadImage("up.png")
// }

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  // create btn to apply force horizontally
  btn1 = createImg("right.png");
  btn1.position(230,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);

  // create btn to apply force vertically
  btn1 = createImg("up.png");
  btn1.position(30,30);
  btn1.size(50,50);
  btn1.mouseClicked(vForce);

  // creating the ground Walls
  bottom = new Ground(200,390,400,20);
  top_wall = new Ground(200,10,400,20);
  left= new Ground(10,200,20,400);
  right = new Ground(390,200,20,400);

  // creating the circular ball body
    //balls option
    var ball_option = {
      restitution : 0.95 
  
    }
  ball = Bodies.circle(200,200,20,ball_option);


  rectMode(CENTER);
  ellipseMode(CENTER);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  //showing ball
  ellipse(ball.position.x,ball.position.y,20);
  //showing ground walls
  bottom.show();
  top_wall.show();
  left.show();
  right.show();
  
}


function hForce(){
  Matter.Body.applyforce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  Matter.Body.applyforce(ball,{x:0,y:0},{x:0,y:-0.05})
}
