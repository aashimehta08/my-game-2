
var gameState = 0;
var playerCount = 0;
var form, player,game;
var hDistance = 0
var vDistance = 0; 
var database;
var player1, player2;
var players = players = [player1,player2];
var allPlayers = [];
var swimmerImg;
var sodaCan,bottle, bag;
var sodaGroup, bottleGroup, bagGroup;
var bottleImg, sodaCanImg, bagImg;

function preload(){
  swimmerImg = loadAnimation("swimmer/frame_00_delay-0.04s.gif","swimmer/frame_09_delay-0.04s.gif","swimmer/frame_10_delay-0.04s.gif"
  ,"swimmer/frame_19_delay-0.04s.gif","swimmer/frame_20_delay-0.04s.gif","swimmer/frame_29_delay-0.04s.gif",
  "swimmer/frame_30_delay-0.04s.gif","swimmer/frame_39_delay-0.04s.gif","swimmer/frame_40_delay-0.04s.gif",
  "swimmer/frame_49_delay-0.04s.gif");
 
  bottleImg = loadImage("plastic bottle .png");
  bagImg = loadImage("plastig bag.png");
  sodaCanImg = loadImage("Soda-Can.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getGameState();
  game.start();

  sodaGroup = new Group();
  bottleGroup = new Group();
  bagGroup = new Group();
  
}

function draw() {
  background(255,255,255);  
  

  if(playerCount==2){
    game.updateState(1);
  }

  if(gameState==1){
    game.play();
  }
}