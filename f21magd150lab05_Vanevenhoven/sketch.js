var pwr = -1;

var midX;
var midY;
var tvW;
var tvH;
var on = false;
var wood = [];

var xdir = 1;
var ydir = -1;

var X;
var Y;
var sX = 0;
var sY = 0;

function setup() {
  createCanvas(1920, 1080);
  
  midX = width/2;
  midY = height/2;
  
  tvW = 600;
  tvH = 400;
  
  X = midX-tvW+50+(875/2);
  Y = midY-tvH+50+(650/2);
  
  angleMode(DEGREES);
  background(150,100,60);
  stroke(130,80,40);
  translate(midX,midY);
  rotate(10);
  translate(-midX,-midY);
  for(var i = 0; i < 250; i++)
    {
      var rs = random(2,7);
      strokeWeight(rs);
      var rv = random(-3,3);

      var rx = random(150,810);
      var ry = 0;
      var rl = 0;

      ry = 5;
      rl = random(1,3);

      wood[wood.length] = [rs,rv,rx,ry,rl];

      translate(rx,ry*108);
      rotate(rv);
      translate(0,-ry*107);
      scale(1,108);
      line(rx,ry-rl,rx,ry+rl);
      scale(1,1/108);
      translate(0,ry*107);
      rotate(-rv);
      translate(-rx,-ry*108);
    }
  translate(midX,midY);
  rotate(-10);
  translate(-midX,-midY);
  
  strokeWeight(1);
  stroke(0);
  noFill();
  rect(midX-tvW,midY-tvH,2*tvW,2*tvH);
  
  fill(150,50,80);
  
  beginShape();
  vertex(0,0);
  vertex(0,height);
  vertex(width,height);
  vertex(width,0);
  beginContour();
  vertex(midX-tvW,midY-tvH);
  vertex(midX+tvW,midY-tvH);
  vertex(midX+tvW,midY+tvH);
  vertex(midX-tvW,midY+tvH);
  endContour();
  endShape(CLOSE);
  
  strokeWeight(5);
  stroke(0);
  fill(0);
  ellipse(midX+tvW-137,midY-tvH+200,100);
  rect(midX+tvW-187,midY-tvH+350,100,50,5);
  rect(midX+tvW-187,midY-tvH+450,100,50,5);
  strokeWeight(1);
}

function draw() {
  background(150,100,60);
  stroke(130,80,40);
  translate(midX,midY);
  rotate(10);
  translate(-midX,-midY);
  for(var i = 0; i < wood.length; i++)
    {
      
      strokeWeight(wood[i][0])
      
      translate(wood[i][2],wood[i][3]*108);
      rotate(wood[i][1]);
      translate(0,-wood[i][3]*107);
      
      scale(1,108);
      line(wood[i][2],wood[i][3]-wood[i][4],wood[i][2],wood[i][3]+wood[i][4]);
      scale(1,1/108);
      
      translate(0,wood[i][3]*107);
      rotate(-wood[i][1]);
      translate(-wood[i][2],-wood[i][3]*108);
      
    }
  translate(midX,midY);
  rotate(-10);
  translate(-midX,-midY);
  
  strokeWeight(1);
  stroke(0);
  noFill();
  rect(midX-tvW,midY-tvH,2*tvW,2*tvH);
  
  fill(150,50,80);
  
  beginShape();
  vertex(0,0);
  vertex(0,height);
  vertex(width,height);
  vertex(width,0);
  beginContour();
  vertex(midX-tvW,midY-tvH);
  vertex(midX+tvW,midY-tvH);
  vertex(midX+tvW,midY+tvH);
  vertex(midX-tvW,midY+tvH);
  endContour();
  endShape(CLOSE);
  
  if (pwr == -1)
    {
      fill(45,35,45);
    }
  else
    {
      fill(125,155,185);
    }
  rect(midX-tvW+50,midY-tvH+50,875,650,30);
  
  if (dist(mouseX,mouseY,midX+tvW-137,midY-tvH+200) < 50)
    {
      fill(15);
    }
  else
    {
      fill(30);
    }
  ellipse(midX+tvW-137,midY-tvH+200,100);
  
  
  if (mouseX > midX+tvW-187 && mouseX < midX+tvW-137 && mouseY > midY-tvH+325 && mouseY < midY-tvH+375)
    {
      fill(15);
    }
  else
    {
      fill(30);
    }
  rect(midX+tvW-187,midY-tvH+325,50,50,5,0,0,5);
  if (mouseX > midX+tvW-137 && mouseX < midX+tvW-87 && mouseY > midY-tvH+325 && mouseY < midY-tvH+375)
    {
      fill(15);
    }
  else
    {
      fill(30);
    }
  rect(midX+tvW-137,midY-tvH+325,50,50,0,5,5,0);
  
  if (mouseX > midX+tvW-187 && mouseX < midX+tvW-137 && mouseY > midY-tvH+425 && mouseY < midY-tvH+475)
    {
      fill(15);
    }
  else
    {
      fill(30);
    }
  rect(midX+tvW-187,midY-tvH+425,50,50,5,0,0,5);
  if (mouseX > midX+tvW-137 && mouseX < midX+tvW-87 && mouseY > midY-tvH+425 && mouseY < midY-tvH+475)
    {
      fill(15);
    }
  else
    {
      fill(30);
    }
  rect(midX+tvW-137,midY-tvH+425,50,50,0,5,5,0);
  
  if (mouseX > midX+tvW-187 && mouseX < midX+tvW-137 && mouseY > midY-tvH+525 && mouseY < midY-tvH+575)
    {
      fill(15);
    }
  else
    {
      fill(30);
    }
  rect(midX+tvW-187,midY-tvH+525,50,50,5,0,0,0);
  if (mouseX > midX+tvW-137 && mouseX < midX+tvW-87 && mouseY > midY-tvH+525 && mouseY < midY-tvH+575)
    {
      fill(15);
    }
  else
    {
      fill(30);
    }
  rect(midX+tvW-137,midY-tvH+525,50,50,0,5,0,0);
  if (mouseX > midX+tvW-137 && mouseX < midX+tvW-87 && mouseY > midY-tvH+575 && mouseY < midY-tvH+625)
    {
      fill(15);
    }
  else
    {
      fill(30);
    }
  rect(midX+tvW-137,midY-tvH+575,50,50,0,0,5,0);
  if (mouseX > midX+tvW-187 && mouseX < midX+tvW-137 && mouseY > midY-tvH+575 && mouseY < midY-tvH+625)
    {
      fill(15);
    }
  else
    {
      fill(30);
    }
  rect(midX+tvW-187,midY-tvH+575,50,50,0,0,0,5);
  
  if(pwr == 1)
    {
      var circ = 100;
      fill(255);
      ellipse(X,Y,circ,circ);
      circ /= 2;
      if(X < midX-tvW+50+circ || X > midX-tvW+925-circ)
        {
          sX *= -1;
          xdir *= -1;
        }
      if(Y < midY-tvH+50+circ || Y > midY-tvH+700-circ)
        {
          sY *= -1;
          ydir *= -1;
        }
      X += sX;
      Y += sY;
    }
  //rect(midX+tvW-187,midY-tvH+325,50,50,5,0,0,5);
  textSize(20);
  textAlign(CENTER);
  fill(0)
  text("Power",midX+tvW-187,midY-tvH+125,100,50);
  text("X Speed",midX+tvW-187,midY-tvH+300,100,50);
  text("Y Speed",midX+tvW-187,midY-tvH+400,100,50);
  text("Direction",midX+tvW-187,midY-tvH+500,100,50);
  fill(255);
  textSize(30);
  text("On/Off",midX+tvW-184,midY-tvH+190,100);
  textSize(50);
  text("-",midX+tvW-181,midY-tvH+325,50,50);
  text("+",midX+tvW-130,midY-tvH+329,50,50);
  text("-",midX+tvW-181,midY-tvH+425,50,50);
  text("+",midX+tvW-130,midY-tvH+429,50,50);
  text("⬉",midX+tvW-179,midY-tvH+529,50,50);
  text("⬈",midX+tvW-131,midY-tvH+529,50,50);
  text("⬋",midX+tvW-179,midY-tvH+579,50,50);
  text("⬊",midX+tvW-131,midY-tvH+579,50,50);
}

function mouseClicked(){
  if (dist(mouseX,mouseY,midX+tvW-137,midY-tvH+200) < 50)
    {
      pwr *= -1;
    }
  else if (mouseX > midX+tvW-187 && mouseX < midX+tvW-137 && mouseY > midY-tvH+325 && mouseY < midY-tvH+375)
    {
      if (sX > 0)
        {
          sX--;
        }
      else if (sX < 0)
        {
          sX++;
        }
    }
  else if (mouseX > midX+tvW-137 && mouseX < midX+tvW-87 && mouseY > midY-tvH+325 && mouseY < midY-tvH+375)
    {
      if (sX == 0)
        {
          if (xdir == 1)
            {
              sX++;
            }
          else if (xdir == -1)
            {
              sX--;
            }
        }
      else if (sX >= 0 && sX < 10)
        {
          sX++;
        }
      else if (sX <= 0 && sX > -10)
        {
          sX--;
        }
    }
  else if (mouseX > midX+tvW-187 && mouseX < midX+tvW-137 && mouseY > midY-tvH+425 && mouseY < midY-tvH+475)
    {
      if (sY > 0)
        {
          sY--;
        }
      else if (sY < 0)
        {
          sY++;
        }
    }
  else if (mouseX > midX+tvW-137 && mouseX < midX+tvW-87 && mouseY > midY-tvH+425 && mouseY < midY-tvH+475)
    {
      if (sY == 0)
        {
          if (ydir == 1)
            {
              sY--;
            }
          else if (ydir == -1)
            {
              sY++;
            }
        }
      else if (sY >= 0 && sY < 10)
        {
          sY++;
        }
      else if (sY <= 0 && sY > -10)
        {
          sY--;
        }
    }
  else if (mouseX > midX+tvW-187 && mouseX < midX+tvW-137 && mouseY > midY-tvH+525 && mouseY < midY-tvH+575)
    {
      xdir = -1;
      ydir = 1;
    }
  else if (mouseX > midX+tvW-137 && mouseX < midX+tvW-87 && mouseY > midY-tvH+525 && mouseY < midY-tvH+575)
    {
      xdir = 1;
      ydir = 1;
    }
  else if (mouseX > midX+tvW-137 && mouseX < midX+tvW-87 && mouseY > midY-tvH+575 && mouseY < midY-tvH+625)
    {
      xdir = 1;
      ydir = -1;
    }
  else if (mouseX > midX+tvW-187 && mouseX < midX+tvW-137 && mouseY > midY-tvH+575 && mouseY < midY-tvH+625)
    {
      xdir = -1;
      ydir = -1;
    }
  
  if (xdir == 1)
    {
      sX = abs(sX);
    }
  else if (xdir == -1)
    {
      sX = -abs(sX);
    }
  if (ydir == 1)
    {
      sY = -abs(sY);
    }
  else if (ydir == -1)
    {
      sY = abs(sY);
    }
}