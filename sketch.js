const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var division=[];
var plinkos = [];
var particles=[];
var divisionHeight=300;
function setup() {
  engine = Engine.create();
  world = engine.world;

  var canvas = createCanvas(480,800);
  base = new Ground(240, 700, 600,20);
  
  for(var d=0; d<=width ; d = d + 80){
    division.push(new Division(d,height-divisionHeight/2, 10, divisionHeight)); 
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
    plinkos.push(new Plinko(j, 375))
  } 

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10 ,10))
  }
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  base.display();
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for (var d = 0; d<division.lenght; d++){
    division[d].display();
  }
  for (var p = 0; p<particles.lenght; p++){
    particles[p].display();
  }

}
