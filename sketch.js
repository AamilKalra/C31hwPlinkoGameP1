const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var division=[];
var plinkos = [];
var divisionHeight=300;
function setup() {
  engine = Engine.create();
  world = engine.world;

  var canvas = createCanvas(480,800);
  base = new Ground(240, 700, 600,20);
  
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  base.display();

  for(var d=0; d<=width ; d = d + 80){
    division.push(new Division(d,height-divisionHeight/2, 10, divisionHeight));
    division[d].display();
  }
  
  for(var j = 40; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
    
  }

  for (var j = 15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175))
  }
  for(var j = 40; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275))
  }
  for (var j = 15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko (j, 375))
  }  
  
}
