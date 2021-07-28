var Runner, Runner_running, edges;
var path, pathImage;
var invisibleGround;

function preload(){
  //pre-load images
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");

  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400)

  path = createSprite(200,180,400,20);
  path.addImage("path",pathImage); 
  path.velocityY = 2;

   //create sprites here
   Runner = createSprite(150,160,20,50);
   Runner.addAnimation("running", Runner_running);
   edges = createEdgeSprites();
   Runner.scale = 0.1;
}

function draw() {
  background("white");
  
  if(keyDown("Right"))
  {
    Runner.x += 2;
  }

  if(keyDown("Left"))
  {
    Runner.x -= 2;
  }

  console.log(path.x);

  if (path.y > 400)
  {
  path.y = height/2;
  }

  drawSprites();
}
