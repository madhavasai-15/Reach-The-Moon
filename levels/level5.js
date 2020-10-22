function level5Start(){
  rocket2.visible = true;
  player.visible = false;
  meteorGroup.setVisibleEach(true);
}

function level5(){
  if(gameState === "level5"){
    if(keyDown("LEFT_ARROW")){
      rocket2.x = rocket2.x -0.6;
    }
    if(keyDown("RIGHT_ARROW")){
      rocket2.x = rocket2.x +0.6;
    }
    
    rocket2.velocityY = -0.4;
    
    if(World.frameCount % 200 === 0) {
      meteor = createSprite(320,-10,10,10);
      meteor.x = random(100,400);
      meteor.scale = 0.7;
      meteor.velocityY = 1;
      meteor.addImage("meteor", meteorImg);
      meteor.depth = Line.depth;
      Line.depth = Line.depth +1;
      meteorGroup.add(meteor);
    }
    
    if(rocket2.isTouching(meteorGroup)){
      rocket2.velocityX = -4;
    }
    
    if(rocket2.y > 480 || rocket2.x < 0 || rocket2.x > 640){
      rocket2.x = 320;
      rocket2.y = 440;
      rocket2.velocityX = 0;
      rocket2.velocityY = 0;
      fuel = 80;
    }
    
    if(rocket2.y < 0){
      rocket2.x = 320;
      rocket2.y = 490;
      gameState = "playerFalling6";
    }
  }
}

function level5End(){
  meteorGroup.setVisibleEach(false);
}