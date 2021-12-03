// import ml5js crepe model for pitch detection
// I did not create anything within this repository, I simply imported it for use in my program.
let crepeurl = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
let oscMaster;
let oscAlt;
let oscHi;
let oscLo;
let fvar;
let audioContext;
let mic;
let pitch;
let button;
let snd = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // camera setup
  capture = createCapture(VIDEO);
  capture.size(width/2, height);
  capture.hide();
  //record sound stuff
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
  // play sound stuff
  oscMaster = new p5.Oscillator();
  oscLo = new p5.Oscillator();
  oscHi = new p5.Oscillator();
  oscMaster.setType('sine');
  oscLo.setType('sine');
  oscHi.setType('sine');
  oscMaster.start();
  oscLo.start();
  oscHi.start();
  oscAlt = new p5.Oscillator();
  oscAlt.setType('triangle');
  oscAlt.disconnect();
  oscAlt.start();
  // create play/pause mic input button
  button = createButton('Toggle Input From Mic');
  button.mousePressed(toggleMic);
  button.position(0, height-100);
  button.size(width, 100);
}

function draw() {
  background(50);
  // resume the audiocontext after the user gives mic permission
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  // mirror the video, so that it appears mirrorlike
  push();
  scale(-1, 1);
  image(capture, -(windowWidth-height-100)/2, 0, -height-100, height-100);
  pop();
  // set a new frequency if the mic detects a frequency with a volume above level 0.25
  if (mic.getLevel() > 0.25)
  {
    oscAlt.amp(0.3);
    oscAlt.freq(2);
    oscLo.amp(oscAlt);
    oscMaster.amp(oscAlt);
    oscHi.amp(oscAlt);
    oscLo.freq(fvar);
    oscMaster.freq(fvar);
    oscHi.freq(fvar);
  }
}

function listening() {
  // pitch detection setup
  console.log('listening');
  pitch = ml5.pitchDetection(crepeurl, audioContext, mic.stream, modelLoaded);
}

function modelLoaded() {
  // start pitch detector
  console.log('model loaded');
  pitch.getPitch(gotPitch);
}

function gotPitch(error, frequency) {
  // detect and return pitch
  if (frequency) {
    fvar = frequency;
  }
  pitch.getPitch(gotPitch);
}

function toggleMic() {
  if (snd == 1)
    {
      mic.stop();
      snd = 0;
    }
  else
    {
      mic.start(listening);
      snd = 1;
    }
}