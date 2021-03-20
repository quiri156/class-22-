function setup() {
  createCanvas(400,400);
 myengine=Matter.Engine.create()
myWorld=myengine.world
var groundoption={
isStatic:true

}

var balloption={
restitution:1.0

}




ball=Matter.Bodies.circle(200,100,20,balloption)
ground=Matter.Bodies.rectangle(200,390,200,20,groundoption)
Matter.World.add(myWorld,ball)
Matter.World.add(myWorld,ground)

}

function draw() {
  background(255,255,255);  
  Matter.Engine.update(myengine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)
ellipseMode(CENTER)
ellipse(ball.position.x,ball.position.y,20,20)





}