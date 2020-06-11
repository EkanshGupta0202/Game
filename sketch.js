var ship;
var ship1;
var database;
var form;
var gameState = 0;
var playerCount = 0;
var player;
var game;
var allPlayers;
var ships;
var bullet, bullet1;
var back_img, ship_img, ship1_img;
var score = 0;

function preload(){
  back_img = loadImage("space.jpg");
  ship_img = loadImage("Spaceship.png")
  ship1_img = loadImage("Spaceship1.png")

}

function setup(){
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  //ship = new Ship(250,50)
  //ship1 = new Ship(250,550);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  //background(0);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  /*
  if(keyIsDown(RIGHT_ARROW)){
    ship.body.x=ship.body.x+5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    ship1.body.x=ship1.body.x+5;
  }
  if(keyIsDown(LEFT_ARROW)){
    ship.body.x=ship.body.x-5;
  }
  if(keyIsDown(LEFT_ARROW)){
    ship1.body.x=ship1.body.x-5;
  */
  
 //console.log(ship.body.x);
  //drawSprites();
}
