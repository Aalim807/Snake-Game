var head;
var group = [];
var food;
var score = 0;
var gameState = "play";

var edges;

function setup(){

  createCanvas(400, 400);
 
  food = createSprite(random(30, 100), random(30, 100), 10, 10);
  food.shapeColor = "yellow";

  head = createSprite(200, 200, 10, 10);
  head.velocityX = 1.5;
  head.shapeColor = "red";
  group.push(head);
}

function draw(){

  background("black")
  edges = createEdgeSprites()

  if(gameState === "play"){

    checkTouch();

    move();
  }

  if(gameState === "end"){

    background("brown")
    textSize(40);
    text("GAME OVER", 80, 200)
    head.destroy()
    group = [];
    food.destroy()
  }
  fill("green");
  textSize(25)
  text("SCORE: " + score, 10, 30);

  drawSprites();
}
function move(){

  if(keyDown("UP_ARROW")){
    head.setSpeedAndDirection(4, -90);
  }

  if(keyDown("DOWN_ARROW")){
    head.setSpeedAndDirection(4, 90);
  }

  if(keyDown("RIGHT_ARROW")){
    head.setSpeedAndDirection(4, 0);
  }

  if(keyDown("LEFT_ARROW")){
    head.setSpeedAndDirection(4, 180);
  }
}

function checkTouch(){

  if(head.isTouching(food)){

    food.x = Math.round(random(30, 250));
    food.y = Math.round(random(30, 250));
    var body = createSprite(200, 200, 10, 10);
    group.push(body);
    score ++;
  }

  if(edges[0].isTouching(head) || edges[1].isTouching(head) || edges[2].isTouching(head) || edges[3].isTouching(head)){

    gameState = "end";
    head.setSpeedAndDirection(0, 0);
  }

  for(var i = group.length - 1; i > 0; i--){

    group[i].x = group[i-1].x
    group[i].y = group[i-1].y 
  }
}
