// Create pixel array, direction variable and food location array
var pix = [];
var dir = 0;
var food = [];

function setup() {
// Set framerate, draw and rotate modes, and initialize the pix array with one pixel
  createCanvas(425, 425);
  frameRate(30);
  rectMode(CORNER);
  angleMode(DEGREES);
  pix[pix.length] = [16,16,0];
}

function draw() {
// only update snake location on half of all draw functions (slows snake movement)
  if (frameCount%2 == 0)
    {
      background(0);
      push();
      translate(25/4,25/4)
      scale(25/2);
      stroke(255,0,0);
      fill(255,0,0);
      rect(food[0], food[1],1,1);
      pop();
      for (i = 0; i < pix.length; i++)
        {
          var c = color(0,255,0,100/pix.length*(pix[i][2]+1));
          var c2 = color(0,255,0,255/pix.length*(pix[i][2]+1));
// Draw snake pixels and edge effects
          push();
          translate(25/4,25/4);
          scale(25/2, 25/2);
          stroke(c);
          fill(c);
          var s = 10;
          var v = 25;
          translate(pix[i][0]+0.5,pix[i][1]+0.5);
          rotate(2*((frameCount*10)+(pix[i][2]*s)+v));
          translate(-(pix[i][0]+0.5),-(pix[i][1]+0.5));
          rect(pix[i][0],pix[i][1],1,1);
          translate(pix[i][0]+0.5,pix[i][1]+0.5);
          rotate(-2*v);
          translate(-(pix[i][0]+0.5),-(pix[i][1]+0.5));
          for (var o = 0; o < 4; o++)
            {
              if (o == 1)
                {
                  stroke(c2);
                  fill(c2);
                  v = 0;
                }
              else
                {
                  stroke(c);
                  fill(c);
                  v = random(0,25);
                }
              translate(pix[i][0]+0.5,pix[i][1]+0.5);
              rotate(-(frameCount*10)-pix[i][2]*s-v);
              translate(-(pix[i][0]+0.5),-(pix[i][1]+0.5));
              rect(pix[i][0],pix[i][1],1,1);
              translate(pix[i][0]+0.5,pix[i][1]+0.5);
              rotate(v);
              translate(-(pix[i][0]+0.5),-(pix[i][1]+0.5));
            }
          pop();
        }
      moveForward();
    }
  if (food.length == 0)
    {
// If no food pixel exists create a new one
      food[food.length] = round(random(0,16))*2;
      food[food.length] = round(random(0,16))*2;
    }
  
  if (pix[pix.length-1][0] == food[0] && pix[pix.length-1][1] == food[1])
    {
// If snake head is in the same pixel as the food eat the food and grow one pixel
      incLength();
      food.splice(0,2);
    }
}

function moveForward()
{
// Creates a new snake pixel in the coresponding direction at the end of the array and deletes the first snake pixel in the array
  if (dir != 0)
    {
      addPixel();
      pix.splice(0,1);
      cBright(-1);
    }
}

function addPixel()
{
// Add a snake pixel to the pix array with the corresponding new location and brightness data
  var px = pix[pix.length-1][0];
  var py = pix[pix.length-1][1];
  var pb = pix[pix.length-1][2];
  
  var inc = 2;
  
  if (dir == 1)
    {
      if (px == 0)
        px = 34;
      pix[pix.length] = [px-inc,py,pb+1];
    }
  else if (dir == 2)
    {
      if (py == 0)
        py = 34;
      pix[pix.length] = [px,py-inc,pb+1];
    }
  else if (dir == 3)
    {
      if (px == 32)
        px = -2;
      pix[pix.length] = [px+inc,py,pb+1];
    }
  else if (dir == 4)
    {
      if (py == 32)
        py = -2;
      pix[pix.length] = [px,py+inc,pb+1];
    }
}

function cBright(v)
{
// Change brightness of all snake pixels by v
  for (var i = 0; i < pix.length; i++)
    {
      pix[i][2] += v;
    }
}

function incLength()
{
// Increment pix array length, growing the snake
  for (var u = pix.length; u > 0; u--)
    {
      pix[u] = pix[u-1];
    }
  pix[0] = pix[1];
  pix[0][2]--;
  cBright(1);
}

function keyPressed(){
// Change snake direction on arrow keypresses
  if(keyCode === LEFT_ARROW)
    {
      dir = 1;
    }
  if(keyCode === UP_ARROW)
    {
      dir = 2;
    }
  else if (keyCode === RIGHT_ARROW)
    {
      dir = 3;
    }
  if(keyCode === DOWN_ARROW)
    {
      dir = 4;
    }
}