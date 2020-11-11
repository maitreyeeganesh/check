var rect1
var rect2
var rect3
var rect4





function setup() {
  createCanvas(1500,800);
 rect1 = createSprite(500, 200, 50, 50);
 rect2 = createSprite(500, 200, 50, 50);
 rect3 = createSprite(300, 400, 50, 50);
 rect4 = createSprite(600, 500, 50, 50);
 
 rect1.shapeColor= "pink"
 rect2.shapeColor= "pink"
 rect3.shapeColor = "red"
 rect4.shapeColor = "red"
}

function draw() {
  background(0,0,0);  
  rect1.x = mouseX 
  rect1.y = mouseY
 if (check(rect3 , rect1)){
  rect1.shapeColor= "yellow"
  rect3.shapeColor= "yellow"
 }
 else if (check(rect2 , rect1)){ 
 rect1.shapeColor = "red"
 rect2.shapeColor = "red"
}
 else{ 
  rect1.shapeColor= "pink"
  rect2.shapeColor= "pink"
  rect3.shapeColor="red"
}
  drawSprites();
}

























