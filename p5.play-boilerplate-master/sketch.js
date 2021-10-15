var snake,food;
var BGAnimation;
var score=0;


var foodgroup;
function preload()
{
BGAnimation=loadImage("BG.jpg")
}
function setup() {

createCanvas(800,400);

snake=new Snake();

foodgroup=new Group ()


}

function draw() {

background(BGAnimation);

fill("blue")
text("Score :"+score,20,20)

Foods();
if (keyDown("left"))  
{ 
snake.moveLeft();
}

if (keyDown("right")) 
{ 
snake.moveRight();
}

if (keyDown("up")) 
{
snake.moveUp();
}

if (keyDown("down")) 
{
snake.moveDown();
}
if (foodgroup.isTouching(snake.spt)){
foodgroup.destroyEach();
score=score+1
snake.spt.width=snake.spt.width+5


}


drawSprites();


}

function Foods(){
  if (frameCount % 40 === 0) {
    food = createSprite(600,120,10,10);
    food.y = Math.round(random(50,750));
    food.x=Math.round(random(50,350))
    food.lifetime = 200;
    foodgroup.add(food);
    food.shapeColor="brown"
  }
    
  }