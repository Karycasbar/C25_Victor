const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;
var tower, towerImage;
var angle, cannon, cannonBall;
var balls = [];
var boat;

//ejemplos de matriz
/*kary = 15;
var arr = [1,kary,true];
console.log(arr);

//matriz con lista de matrices
var arr2 = [[1,2],[3,4],[5,6]];
console.log(arr2);
console.log(arr2[1][1]);*/

function preload() {
 backgroundImg = loadImage("./assets/background.gif");
 towerImage = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 15;
  
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(0,height-1,width*2,1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160,350,160,310, options);
  World.add(world, tower);

  angle = 20;
  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);
  boat = new Boat(width-79, height-60, 170,170, -80);
 
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
 
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width*2, 1);
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();

  for(var i = 0; i<balls.length; i++){
    showCannonBalls(balls[i]);
  }

  cannon.display();
  //cannonBall.display();
  boat.display();
  
   
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    //cannonBall.shoot();
    balls[balls.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball){
  if(ball){
    ball.display();
  }
}