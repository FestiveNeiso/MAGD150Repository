/* 
Aria Vanevenhoven
10/5/2021
MAGD 150 Lab 3
*/

// Inline comments describe what each section of code does, in addition to tracking assignment completion stuff.

// Step #1: 1/1 - Bubbles

// Global Variables

// Step #2: 1/2 - Non-Floating Point Variable
var maxSpeed = 3;
var BDS = [];
var xVal;
var yVal = 0;
var zVal = 0;
var vary;
var vVal = 7;
var cvar;
var speedX = 1;
var speedY = 1;
var vSpeed = 12;
// Step #2: 2/2 - One Floating Point Variable
var vSpeedOffset = 2.5;
var cSpeed = 1;
var packmax = 25;
var packmin = 50;
var graceZone = 100;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background('#002050');
  pointLight(155,155,155,-width/2,-height/2,150);
  ambientLight(150,150,150);
  angleMode(DEGREES);
  colorMode(RGB, 255,255,255,255);
  noStroke();
}

function draw() {
  // Clear And Reload Page
  clear();
  createCanvas(windowWidth, windowHeight, WEBGL);
  background('#002050');
  // Step #5: 1/4 - Division Used
  pointLight(155,155,155,-width/2,-height/2,150);
  ambientLight(100,100,100);
  
  // Set Speed And Direction Using Mouse Position Relative To Center
  // Step #6: 1/3 - Map Used
  // Step #4: 1/4 - MouseX Used
  // Step #4: 2/4 - Width Used
  speedX = map(mouseX,0,width,-maxSpeed,maxSpeed);
  // Step #4: 3/4 - MouseY Used
  // Step #4: 4/4 - Height Used
  speedY = map(mouseY,0,height,-maxSpeed,maxSpeed);
  
  // Update Bubbles
  tickB();
  
  // Step #5: 2/4 - Modulus Used
  // Step #5: 3/4 - Equal To Used
  if(frameCount%20 == 0){
    // Determine Pack Size and Generate More Bubbles
    // Step #6: 2/3 - Maximum Used
    // Step #6: 3/3 - Minimum Used
    packcount = round(random(min(random(packmin,packmax),random(packmin,packmax)),max(random(packmin,packmax),random(packmin,packmax))));
    // Step #3: 1/2 - Print Command Used Once
    print('Generating pack of ' + packcount);
    // Step #5: 4/4 - Less Than Used
    for(num = 0; num < packcount; num++){
      // Generate [Packsize] Bubbles
      genB();
    }
  }
}

// Update Bubbles Function

function tickB (){
  for (var iB = 0; iB < BDS.length; iB++){
    noStroke();
    // Move To Bubble Location
    translate(BDS[iB][0],BDS[iB][1],BDS[iB][2]);
    translate(map(sin(BDS[iB][4]), -1, 1, -vVal, vVal),0,0);
    // Sets Color Variables
    var r = map(sin(BDS[iB][5]), -1, 1, 150, 255);
    var g = map(sin(BDS[iB][5]), -1, 1, 255, 150);
    var b = map(cos(BDS[iB][5]), -1, 1, 150, 255);
    c = color(r,g,b,170);
    // Draw Bubble From Memory
    specularMaterial(c);
    sphere(BDS[iB][3]-1);
    ambientMaterial(c);
    sphere(BDS[iB][3]);
    // Correct Targetted Location (Return To Default 0,0)
    translate(-map(sin(BDS[iB][4]), -1, 1, -vVal, vVal),0,0);
    translate(-BDS[iB][0],-BDS[iB][1],-BDS[iB][2]);
    // Update Important Variables
    offset = random(-vSpeedOffset,0);
    BDS[iB][0] = BDS[iB][0] + speedX;
    BDS[iB][1] = BDS[iB][1] + speedY;
    BDS[iB][4] = BDS[iB][4] + vSpeed + offset;
    BDS[iB][5] = BDS[iB][5] + cSpeed;
  }
  // Remove Bubbles That Are No Longer On Screen
  for(var i = 0; i < BDS.length; i++)
  {
    if(BDS[i][0] > (width/2)+graceZone || BDS[i][0] < -(width/2)-graceZone || BDS[i][1] > (height/2)+graceZone || BDS[i][1] < -(height/2)-graceZone){
      BDS.splice(i,1);
      // Step #3: 2/2 - Print Command Used Twice
      print('Cleared Out Of Bounds Bubble');
    }
  }
}

// Function For Initializing Bubbles Data

function genB (){
  // Initialize New Bubble Variables
  // Generate Valid New Bubble Spawn Location
  xVal = random(-(width/2)-graceZone,(width/2)+graceZone);
  yVal = random(-(height/2)-graceZone,(height/2)+graceZone);
  while((xVal >= -(width/2) && xVal <= (width/2)) && (yVal >= -(height/2) && yVal <= (height/2))){
    xVal = random(-(width/2)-graceZone,(width/2)+graceZone);
    yVal = random(-(height/2)-graceZone,(height/2)+graceZone);
  }
  // Variable Variables!
  zVal = random(0,150);
  rad = random(2,8);
  vary = random(-1,1);
  cvar = random(150,255);
  // Create New Bubble
  cB1();
}

// Create Bubble And Store Data In BDS

function cB1 (){
  // Create New Bubble Object And Store Data
  BDS[BDS.length] = [xVal,yVal,zVal,rad,vary,cvar];
  noStroke();
  // Move To Bubble Location
  translate(BDS[BDS.length-1][0],BDS[BDS.length-1][1],BDS[BDS.length-1][2]);
  translate(map(sin(BDS[BDS.length-1][4]), -1, 1, -vVal, vVal),0,0);
  // Sets Color Variables
  var r = map(sin(BDS[BDS.length-1][5]), -1, 1, 150, 255);
  var g = map(sin(BDS[BDS.length-1][5]), -1, 1, 255, 150);
  var b = map(cos(BDS[BDS.length-1][5]), -1, 1, 150, 255);
  c = color(r,g,b,130);
  // Create New Bubble
  ambientMaterial(c);
  sphere(BDS[BDS.length-1][3]-1);
  specularMaterial(255);
  sphere(BDS[BDS.length-1][3]);
  // Correct Targetted Location (Return To Default 0,0)
  translate(-map(sin(BDS[BDS.length-1][4]), -1, 1, -vVal, vVal),0,0);
  translate(-BDS[BDS.length-1][0],-BDS[BDS.length-1][1],-BDS[BDS.length-1][2]);
}

// Step #7: 1/1 - No Errors Found

// Step #8: 1/1 - Submitted Successfully