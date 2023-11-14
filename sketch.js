
var HauntedHouse
var solider
var demon
var coins

function preLoad(){

  HauntedHouse = loadImage("hauntedhouseimg.jpg")
  solider = loadImage("solider.png")
  demon = loadImage("demon.png")
  coins = loadImage("coins.png")
}

function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(HauntedHouse);  
  drawSprites();
}
