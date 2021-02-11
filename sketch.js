var h,m,s;
var hAngle, mAngle, sAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);

  h=hour();
  m=minute();
  s=second();

  hAngle=map(h%12,0,12,0,360);
  mAngle=map(m,0,60,0,360);
  sAngle=map(s,0,60,0,360); 

  push();
  stroke("red");
  strokeWeight(7);
  rotate(sAngle);
  line(0,0,100,0);
  pop();

  push();
  stroke("green");
  strokeWeight(7);
  rotate(mAngle);
  line(0,0,75,0);
  pop();

  push();
  stroke("blue");
  strokeWeight(7);
  rotate(hAngle);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0,0,300,300,0,sAngle);
  stroke("green");
  arc(0,0,280,280,0,mAngle);
  stroke("blue");
  arc(0,0,260,260,0,hAngle);

  fill("white");
  noStroke();
  rotate(90);
  textFont("Times New Roman");
  textSize(25);
  text("12",-8,-100);
  text("6",-7,115);
  text("3",100,10);
  text("9",-110,10);
  text("1",50,-80);
  text("11",-60,-80);
  text("10",-100,-40);
  text("2",80,-40);
  text("4",80,60);
  text("5",50,100);
  text("8",-100,60);
  text("7",-70,100);
}