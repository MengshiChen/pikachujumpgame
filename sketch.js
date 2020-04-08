let pikachu;
let uImg;
let pImg;
let bImg;
let pockys = [];
//let soundClassifier;


function preload() {
  //const options = {
    //probabilityThreshold: 0.95
 // };
   
  //soundClassifier = //ml5.soundClassifier('SpeechCommands18w', options);
 
  uImg = loadImage('pikachu.png');
  pImg = loadImage('pocky.png');
  bImg = loadImage('background.png');
}

function mousePressed() {
  pockys.push(new Pocky());
}

function setup() {
  createCanvas(800, 450);
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
    }
  }

  pikachu.show();
  pikachu.move();
}