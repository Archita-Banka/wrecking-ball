const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2,box3,box4,box5;
var box6, box7,box8,box9;
var box10, box11,box12;
var box13, box14;
var ball;
var string;

function preload() {

}

  
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,380,800,20);
  
  box1 = new Box(450,350);
  box2 = new Box(500,350);
  box3 = new Box(540,350);
  box4 = new Box(570,350);
  box5 = new Box(610,350);

  box6 = new Box(475,320);
  box7 = new Box(515,320);
  box8 = new Box(550,320);
  box9 = new Box(580,320);
  
  box10 = new Box(490,290);
  box11 = new Box(540,290);
  box12 = new Box(580,290);

  box13 = new Box(520, 260);
  box14 = new Box(570, 260);
  
  ball = new Ball();

  string = new String(ball,{x:280,y:100});

  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  ball.display();
  string.display();
  fill("pink");
  box1.display();
  box2.display();  
  box3.display();  
  box4.display();  
  box5.display();
  
  fill("cyan");
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  fill("grey");
  box10.display(); 
  box11.display(); 
  box12.display();

  fill("orange")
  box13.display();
  box14.display();
    
}
function mouseDragged(){
  // if (gameState !== 'launched') {
      Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  // }

}

function mouseReleased(){
  string.fly();
  //gameState = "launched";
}
function keyPressed() {
  if (keyCode === 32) {
      string.attach(ball.body);
      Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
}
