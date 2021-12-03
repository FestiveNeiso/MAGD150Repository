/* 
Aria Vanevenhoven
9/28/2021
MAGD 150 Lab 2
*/

// Inline comments describe what each section of code does, in addition to tracking assignment completion stuff.

// Global Variables

var init = false;
var mc;
var popsize = 300;
var bggen = false;
var bgarr = [];
var c5;

function setup() {
  
  // Start Meteor Timers
  
  if (init == false){
    setInterval(genM, random(2500,10000));
    setInterval(genM, random(5000,10000));
    setInterval(genM, random(7500,10000));
    init = true;
  }
  
  // Reset Importatnt Data After Each Draw
  
  clear();
  blendMode(BLEND);
  mc = color(150,150,150,255);
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
  
  // Generate Background
  // Step 2 1/1 Give Canvas A Background
  // Step 4 1/3 Include Hex Color Mode
  
  background('#0a0a0a');
  
  // Generate Data Array So Sky Remains The Same Each Time It's Drawn
  
  if (bggen == false){
    for (i5 = 0; i5 < popsize; i5++){
      
      // color
      
      var hue = random(0, 255);
      var sat = random(25, 50);
      var bri = random(25, 100);

      // Step 4 2/3 Include HSB Color Mode
      
      colorMode(HSB);
      
      c5 = color(hue,sat,bri,255);
      size = map(random(1,5),1,5,1,5);
      
      // Star Color, Star Size, Random Position X, Random Position Y
      
      bgarr[i5] = [c5,size,random(-325,325),random(-325,325)];
      
      bggen = true;
    }
  }
  
  // Populate With Stars
  
  pointLight(255,255,255,-250,-250,350);
  ambientLight(30,10,20);
  
  for(var i6 = 0; i6 < popsize; i6++){
    
    noStroke();

    translate(bgarr[i6][2],bgarr[i6][3],-150);

    ambientMaterial(bgarr[i6][0]);
    
    // Step 5 1/3 Include Arc
    
    arc(0,0,bgarr[i6][1],bgarr[i6][1],0,360);
    
    translate(-bgarr[i6][2],-bgarr[i6][3],150);
  }
  
  // Reset Color Mode
  
  colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
  setup();
  
  // Debug Nonsense
  //ambientLight(30,10,30);
  //sphere(125)
  
  strokeWeight(1.075);
  noStroke();
  
  // set rotations
  rotateZ(10);
  rotateX(-7);
  rotateY(-frameCount);
  rotateZ(map(sin(frameCount),1,-1,50,-50)/10);
  
  // Rings Code
  
  for(var i4 = 0; i4 < 180; i4+=2){
    push();
    
    // color
    
    var r4 = map(sin(i4*2+frameCount), -1, 1, 150, 200);
    var g4 = map(sin(i4*2+frameCount), -1, 1, 120, 170);
    var b4 = map(cos(i4*2+frameCount), -1, 1, 100, 150);
    
    // Step 3 1/4 Use 4 Colors
    // Step 4 3/3 Use RGB Color Mode
    
    c4 = color(r4,g4,b4,1);
    
    ambientMaterial(c4);
    
    // rotate and repeat to create full rings
    
    rotateY(i4*2);
    rotateZ(90);
    
    l = 16;
    //*
    translate(0,0,165);
    cylinder(1,l);
    translate(0,0,4);
    cylinder(1,l);
    translate(0,0,3);
    cylinder(1,l);
    translate(0,0,2);
    cylinder(1,l);
    translate(0,0,2);
    cylinder(1,l);
    translate(0,0,2);
    cylinder(1.5,l);
    translate(0,0,3);
    cylinder(2,l);
    translate(0,0,3);
    cylinder(3,l);
    translate(0,0,3);
    cylinder(3.5,l);
    translate(0,0,4);
    cylinder(4,l);
    translate(0,0,4);
    cylinder(3.5,l);
    translate(0,0,3);
    cylinder(3,l);
    translate(0,0,3);
    cylinder(2,l);
    translate(0,0,3);
    cylinder(1.5,l);
    translate(0,0,2);
    cylinder(1,l);
    translate(0,0,2);
    cylinder(1,l);
    translate(0,0,2);
    cylinder(1,l);
    translate(0,0,3);
    cylinder(1,l);
    translate(0,0,4);
    cylinder(1,l);
    
    pop();
  }
  
  // Rotation Correction
  
  rotateZ(map(sin(-frameCount),1,-1,50,-50)/10);
  rotateY(frameCount);
  rotateX(7);
  rotateZ(100);
  
  // Planet Code
  // Step 1 1/1 Adhere to Planets/Outer Space Theme
  
  // set rotations
  rotateX(frameCount);
  
  for(var i = 0; i < 360; i++){
    push();
    
    // color and create planet base
    
    var r = map(sin(i+frameCount), -1, 1, 180, 200);
    var g = map(sin(i+frameCount), -1, 1, 100, 120);
    var b = map(cos(i+frameCount), -1, 1, 220, 250);
    
    // Step 3 2/4 Use 4 Colors
    
    c1 = color(r,g,b,1);
    
    ambientMaterial(c1);
    
    rotateX(i/2);
    
    cylinder(125,2,24,1,false,false);
    
    pop();
  }
  
  // Correct X axis, Rotate Z, Rerotate X
  
  rotateX(-frameCount);
  rotateZ(frameCount/3);
  rotateX(frameCount*3);
  
  for(var i2 = 0; i2 < 360; i2++){
    push();
    
    // color and create planet mask 1
    
    var r2 = map(sin(i2+frameCount), -1, 1, 190, 230);
    var g2 = map(sin(i2+frameCount), -1, 1, 150, 150);
    var b2 = map(cos(i2+frameCount), -1, 1, 70, 100);
    
    blendMode(DARKEST);
    
    // Step 3 3/4 Use 4 Colors
    
    c2 = color(r2,g2,b2,0.4);
    
    ambientMaterial(c2);
    
    rotateX(i2/2);
    
    cylinder(127,2,24,1,false,false);
    
    pop();
  }
  
  // Correct X and Z axis, Rerotate X and Z
  
  rotateX(-frameCount*3);
  rotateZ(-frameCount/3);
  rotateZ(frameCount/2);
  rotateX(frameCount*2);
  
  for(var i3 = 0; i3 < 360; i3++){
    push();
    
    // color and create planet mask 2
    
    var r3 = map(sin(i3+frameCount), -1, 1, 100, 150);
    var g3 = map(sin(i3+frameCount), -1, 1, 50, 70);
    var b3 = map(cos(i3+frameCount), -1, 1, 150, 250);
    
    // Step 3 4/4 Use 4 Colors
    
    c3 = color(r3,g3,b3,0.7);
    
    ambientMaterial(c3);
    
    rotateX(i3/2);
    
    cylinder(129,2,24,1,false,false);
    
    pop();
  }
  
  // Rotation Correction
  rotateX(-frameCount*2);
  rotateZ(-frameCount/2);
  rotateZ(-110);
  
  // Meteors!
  
  blendMode(BLEND);
  
  tickM();
}

// More Global Variables...For Meteors!

var MDS = [];
var rr;
var ms1;
var ms2;
var transVal;
var trajectVal;
var v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13;
var zVal;
var zVala = [];

// Update Meteors Function

function tickM (){
  for (var iM = 0; iM < MDS.length; iM++){
    noStroke()
    ambientMaterial(mc);

    // Update Position Based On Data Stored In MDS
    
    translate(MDS[iM][1],MDS[iM][2],zVala[iM]);
    translate(MDS[iM][3]*MDS[iM][4], MDS[iM][3]);
    rotateZ(MDS[iM][3]*MDS[iM][5]);

    if(MDS[iM][0] == 1){
      quad(0-MDS[iM][6],0-MDS[iM][7],0+MDS[iM][8],0-MDS[iM][9],0+MDS[iM][10],0+MDS[iM][11],0-MDS[iM][12],0+MDS[iM][13]);
    }
    if(MDS[iM][0] == 2){
      beginShape();
      vertex(-15-MDS[iM][6],-25-MDS[iM][7]);
      vertex(-30-MDS[iM][8],0-MDS[iM][9]);
      vertex(-15-MDS[iM][10],15+MDS[iM][11]);
      vertex(5+MDS[iM][12],0+MDS[iM][13]);
      vertex(20,-15-MDS[iM][14]);
      endShape(CLOSE);
    }
    if(MDS[iM][0] == 3){
      beginShape();
      vertex(-20-MDS[iM][6],-25-MDS[iM][7]);
      vertex(15+MDS[iM][8],-25-MDS[iM][9]);
      vertex(30+MDS[iM][10],5+MDS[iM][11]);
      vertex(20+MDS[iM][12],25+MDS[iM][13]);
      vertex(-15-MDS[iM][14],25+MDS[iM][15]);
      vertex(-30-MDS[iM][16],-5-MDS[iM][17]);
      endShape(CLOSE);
    }
    if(MDS[iM][0] == 4){
      beginShape();
      vertex(-20-MDS[iM][6],-25-MDS[iM][7]);
      vertex(-35-MDS[iM][8],5+MDS[iM][9]);
      vertex(-20-MDS[iM][10],30+MDS[iM][11]);
      vertex(0,45+MDS[iM][12]);
      vertex(20+MDS[iM][13],30+MDS[iM][14]);
      vertex(35+MDS[iM][15],5+MDS[iM][16]);
      vertex(20+MDS[iM][17],-25-MDS[iM][18]);
      endShape(CLOSE);
    }

    rotateZ(-MDS[iM][3]*MDS[iM][5]);
    translate(-MDS[iM][3]*MDS[iM][4], -MDS[iM][3]);
    translate(-MDS[iM][1],-MDS[iM][2], -zVala[iM]);

    MDS[iM][3] += 3;
  }

  // Remove Meteors That Are No Longer On Screen
  
  if (MDS.length > 10){
    MDS.splice(0,6);
    zVala.splice(0,6);
  }
  
}

// Function For Initializing Meteor Data

function genM (){
  var type = round(map(random(0,100),0,100,1,4));
  ms1 = random(-850,-350);
  ms2 = random(-500,200);
  transVal = 0;
  trajectVal = random(3,5);
  rr = random(-3,3);
  zVal = random([-150,-150,-150,225]);
  
  if (type == 1){
     cM1();
  }
  if (type == 2){
     cM2();
  }
  if (type == 3){
     cM3();
  }
  if (type == 4){
     cM4();
  }
}

// Function For Creating A Type A Meteor

function cM1 (){
  sizediff = 30;

  v1 = random(0,sizediff);
  v2 = random(0,sizediff);
  v3 = random(0,sizediff);
  v4 = random(0,sizediff);
  v5 = random(0,sizediff);
  v6 = random(0,sizediff);
  v7 = random(0,sizediff);
  v8 = random(0,sizediff);
  
  MDS[MDS.length] = [1,ms1,ms2,transVal,trajectVal,rr,v1,v2,v3,v4,v5,v6,v7,v8];

  zVala[MDS.length-1] = zVal;
  
  stroke(mc);
  fill(mc);
  translate(MDS[MDS.length-1][1],MDS[MDS.length-1][2]);
  translate(MDS[MDS.length-1][3]*MDS[MDS.length-1][4], MDS[MDS.length-1][3]);
  rotateZ(MDS[MDS.length-1][3]*MDS[MDS.length-1][5]);

  // Step 5 2/3 Include Quad
  
  quad(0-MDS[MDS.length-1][6],0-MDS[MDS.length-1][7],0+MDS[MDS.length-1][8],0-MDS[MDS.length-1][9],0+MDS[MDS.length-1][10],0+MDS[MDS.length-1][11],0-MDS[MDS.length-1][12],0+MDS[MDS.length-1][13]);
  
  rotateZ(-MDS[MDS.length-1][3]*MDS[MDS.length-1][5]);
  translate(-MDS[MDS.length-1][3]*MDS[MDS.length-1][4], -MDS[MDS.length-1][3]);
  translate(-MDS[MDS.length-1][1],-MDS[MDS.length-1][2]);
}

// Function For Creating A Type B Meteor

function cM2 (){
  sizediff = 15;

  v1 = random(0,sizediff);
  v2 = random(0,sizediff);
  v3 = random(0,sizediff);
  v4 = random(0,sizediff);
  v5 = random(0,sizediff);
  v6 = random(0,sizediff);
  v7 = random(0,sizediff);
  v8 = random(0,sizediff);
  v9 = random(0,sizediff);
  
  MDS[MDS.length] = [2,ms1,ms2,transVal,trajectVal,rr,v1,v2,v3,v4,v5,v6,v7,v8,v9];

  zVala[MDS.length-1] = zVal;

  stroke(mc);
  fill(mc);
  translate(MDS[MDS.length-1][1],MDS[MDS.length-1][2]);
  translate(MDS[MDS.length-1][3]*MDS[MDS.length-1][4], MDS[MDS.length-1][3]);
  rotateZ(MDS[MDS.length-1][3]*MDS[MDS.length-1][5]);
  
  // Step 5 3/3 Include Shape
  
  beginShape();
  vertex(-15-MDS[MDS.length-1][6],-25-MDS[MDS.length-1][7]);
  vertex(-30-MDS[MDS.length-1][8],0-MDS[MDS.length-1][9]);
  vertex(-15-MDS[MDS.length-1][10],15+MDS[MDS.length-1][11]);
  vertex(5+MDS[MDS.length-1][12],0+MDS[MDS.length-1][13]);
  vertex(20,-15-MDS[MDS.length-1][14]);
  endShape(CLOSE);
  
  rotateZ(-MDS[MDS.length-1][3]*MDS[MDS.length-1][5]);
  translate(-MDS[MDS.length-1][3]*MDS[MDS.length-1][4], -MDS[MDS.length-1][3]);
  translate(-MDS[MDS.length-1][1],-MDS[MDS.length-1][2]);
}

// Function For Creating A Type C Meteor

function cM3 (){
  sizediff = 15;

  v1 = random(0,sizediff);
  v2 = random(0,sizediff);
  v3 = random(0,sizediff);
  v4 = random(0,sizediff);
  v5 = random(0,sizediff);
  v6 = random(0,sizediff);
  v7 = random(0,sizediff);
  v8 = random(0,sizediff);
  v9 = random(0,sizediff);
  v10 = random(0,sizediff);
  v11 = random(0,sizediff);
  v12 = random(0,sizediff);
  
  MDS[MDS.length] = [3,ms1,ms2,transVal,trajectVal,rr,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12];

  zVala[MDS.length-1] = zVal;

  stroke(mc);
  fill(mc);
  translate(MDS[MDS.length-1][1],MDS[MDS.length-1][2]);
  translate(MDS[MDS.length-1][3]*MDS[MDS.length-1][4], MDS[MDS.length-1][3]);
  rotateZ(MDS[MDS.length-1][3]*MDS[MDS.length-1][5]);
  beginShape();
  vertex(-20-MDS[MDS.length-1][6],-25-MDS[MDS.length-1][7]);
  vertex(15+MDS[MDS.length-1][8],-25-MDS[MDS.length-1][9]);
  vertex(30+MDS[MDS.length-1][10],5+MDS[MDS.length-1][11]);
  vertex(20+MDS[MDS.length-1][12],25+MDS[MDS.length-1][13]);
  vertex(-15-MDS[MDS.length-1][14],25+MDS[MDS.length-1][15]);
  vertex(-30-MDS[MDS.length-1][16],-5-MDS[MDS.length-1][17]);
  endShape(CLOSE);
  rotateZ(-MDS[MDS.length-1][3]*MDS[MDS.length-1][5]);
  translate(-MDS[MDS.length-1][3]*MDS[MDS.length-1][4], -MDS[MDS.length-1][3]);
  translate(-MDS[MDS.length-1][1],-MDS[MDS.length-1][2]);
}

// Function For Creating A Type D Meteor

function cM4 (){
  sizediff = 20;

  v1 = random(0,sizediff);
  v2 = random(0,sizediff);
  v3 = random(0,sizediff);
  v4 = random(0,sizediff);
  v5 = random(0,sizediff);
  v6 = random(0,sizediff);
  v7 = random(0,sizediff);
  v8 = random(0,sizediff);
  v9 = random(0,sizediff);
  v10 = random(0,sizediff);
  v11 = random(0,sizediff);
  v12 = random(0,sizediff);
  v13 = random(0,sizediff);
  
  MDS[MDS.length] = [4,ms1,ms2,transVal,trajectVal,rr,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13];

  zVala[MDS.length-1] = zVal;

  stroke(mc);
  fill(mc);
  translate(MDS[MDS.length-1][1],MDS[MDS.length-1][2]);
  translate(MDS[MDS.length-1][3]*MDS[MDS.length-1][4], MDS[MDS.length-1][3]);
  rotateZ(MDS[MDS.length-1][3]*MDS[MDS.length-1][5]);
  beginShape();
  vertex(-20-MDS[MDS.length-1][6],-25-MDS[MDS.length-1][7]);
  vertex(-35-MDS[MDS.length-1][8],5+MDS[MDS.length-1][9]);
  vertex(-20-MDS[MDS.length-1][10],30+MDS[MDS.length-1][11]);
  vertex(0,45+MDS[MDS.length-1][12]);
  vertex(20+MDS[MDS.length-1][13],30+MDS[MDS.length-1][14]);
  vertex(35+MDS[MDS.length-1][15],5+MDS[MDS.length-1][16]);
  vertex(20+MDS[MDS.length-1][17],-25-MDS[MDS.length-1][18]);
  endShape(CLOSE);
  rotateZ(-MDS[MDS.length-1][3]*MDS[MDS.length-1][5]);
  translate(-MDS[MDS.length-1][3]*MDS[MDS.length-1][4], -MDS[MDS.length-1][3]);
  translate(-MDS[MDS.length-1][1],-MDS[MDS.length-1][2]);
}

// Step 6 1/1 While not symetrical on the Y axis the image is symetrical on a tilted axis, although it does wobble, changing the line of symmetry. Brighter elements like the planet and meteors stand out while the stars in the background are slightly darker. Scaling is big on this one, meteors that spawn in front of the planet are much closer and darker, in addition the stars in the background appear distant due to thier size relative to the planet, which is of course the focal point.

// Step 7 1/1 Sketch Operates without errors

// Step 8 1/1 Obviously if you're reading this it was succesfully submitted lmao.