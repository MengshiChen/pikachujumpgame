let pikachu;
let uImg;
let pImg;
let bImg;
let pockys = [];
let bcMusic;
let jumpSound;
let state = 'splash';



function preload() {

  soundFormats('mp3', 'ogg');
  bcMusic = loadSound('assets/backgroundmusic.mp3');
  jumpSound = loadSound('assets/jumpsound.mp3');


  uImg = loadImage('pikachu.png');
  pImg = loadImage('pocky.png');
  bImg = loadImage('background.png');
}

function mousePressed() {
  pockys.push(new Pocky());
}

function setup() {
  bcMusic.setVolume(0.5);
  bcMusic.play();


  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(20);
  pikachu = new  Pikachu();
  //soundClassifier.classify(gotCommand);
}
//function gotCommand(error, results) {

 // if (error) {
    //console.error(error);
//}
  //console.log(results[0].label,results[0].confidence);

 // if (results[0].label == 'up') {
      //pikachu.jump();
//}}

function keyPressed() {
  if (key == ' ') {
    pikachu.jump();
    jumpSound.setVolume(0.5);
    jumpSound.play();
  }
  
}


function draw() {

  if (random(1) < 0.005) {
    pockys.push(new Pocky());
  }

  background(bImg);

  for (let t of pockys) {
    t.move();
    t.show();

    if (pikachu.hits(t)) {
      console.log('game over');
      noLoop();
      jumpSound.stop();
      bcMusic.stop();
    }
  }

  pikachu.show();
  pikachu.move();
}
